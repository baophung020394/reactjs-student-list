USE [Practise]
GO

/****** Object:  StoredProcedure [dbo].[SelectAllStudents]    Script Date: 9/20/2018 9:39:09 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SelectAllStudents]	
	@PageIndex INT,
	@PageSize INT,
	@KeyWord NVarchar(255)
As
BEGIN 
	DECLARE @TotalItem INT
	SET @TotalItem = (SELECT COUNT(*) FROM Student)
	DECLARE @Pagination TABLE  (
		RowNumber INT,
		ID INT,
		StudentName NVARCHAR(255),
		TotalItem INT,
		PageSize INT, 
		TotalPage INT,
		PageIndex INT,
		Row_Version TIMESTAMP
	)
	INSERT INTO @Pagination(ID, RowNumber, StudentName, TotalItem, PageSize, TotalPage, PageIndex) 
	SELECT	
			ID,
			ROW_NUMBER() OVER(ORDER BY Name),
			Name, 
			@TotalItem,
			@PageSize,
			CASE   
				WHEN @TotalItem/@PageSize = 0 THEN @TotalItem/@PageSize 
				WHEN @TotalItem%@PageSize > 0 THEN @TotalItem/@PageSize + @TotalItem%3 
			END   
			, @PageIndex
	FROM Student
	WHERE Name LIKE '%' + @KeyWord + '%'
	GROUP BY ID, Name

	SELECT  RowNumber, p.ID, StudentName , MAX(TotalItem) AS TotalItem , MAX(TotalPage) AS TotalPage , MAX(PageSize) AS PageSize, MAX(PageIndex) AS PageIndex, s.Row_Version
	FROM @Pagination p
	INNER JOIN Student s ON p.ID = s.ID
	WHERE RowNumber > ((@PageIndex - 1) * PageSize) AND RowNumber <= (@PageIndex * PageSize)
	GROUP BY  p.ID, StudentName, RowNumber, s.Row_Version
	ORDER BY RowNumber
	--SELECT Name
	--FROM Student
	--ORDER By Name
	--OFFSET ((1 - 1) * (SELECT COUNT(Name)/3 FROM Student)) ROWS       
	--FETCH NEXT (SELECT COUNT(Name)/3 FROM Student) ROWS ONLY;
END
GO

