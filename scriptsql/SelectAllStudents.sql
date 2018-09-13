USE [Practise]
GO

/****** Object:  StoredProcedure [dbo].[SelectAllStudents]    Script Date: 9/13/2018 5:26:40 PM ******/
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
		PageIndex INT		
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

	SELECT RowNumber,  ID, StudentName , MAX(TotalItem) AS TotalItem , MAX(TotalPage) AS TotalPage , MAX(PageSize) AS PageSize, MAX(PageIndex) AS PageIndex 
	FROM @Pagination
	WHERE RowNumber > ((@PageIndex - 1) * PageSize) AND RowNumber <= (@PageIndex * PageSize)
	GROUP BY  ID, StudentName, RowNumber
	ORDER BY RowNumber
	--SELECT Name
	--FROM Student
	--ORDER By Name
	--OFFSET ((1 - 1) * (SELECT COUNT(Name)/3 FROM Student)) ROWS       
	--FETCH NEXT (SELECT COUNT(Name)/3 FROM Student) ROWS ONLY;
END
GO

