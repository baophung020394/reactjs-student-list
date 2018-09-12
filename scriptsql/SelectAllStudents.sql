USE [Practise]
GO

/****** Object:  StoredProcedure [dbo].[SelectAllStudents]    Script Date: 9/12/2018 6:06:35 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SelectAllStudents]	
	@PageIndex INT,
	@PageSize INT
As
BEGIN 
	DECLARE @TotalItem INT
	SET @TotalItem = (SELECT COUNT(*) FROM Student)
	DECLARE @Pagination TABLE  (
		RowNumber INT,
		StudentName NVARCHAR(255),
		TotalItem int,
		PageSize int, 
		TotalPage int,
		PageIndex int		
	)
	INSERT INTO @Pagination(RowNumber, StudentName, TotalItem, PageSize, TotalPage, PageIndex) 
	SELECT	ROW_NUMBER() OVER(ORDER BY Name),
			Name, 
			@TotalItem,
			@PageSize, 
			CASE   
				WHEN @TotalItem/@PageSize = 0 THEN @TotalItem/@PageSize 
				WHEN @TotalItem%@PageSize > 0 THEN @TotalItem/@PageSize + @TotalItem%3 
			END   
			, 1 
	FROM Student
	GROUP BY Name

	SELECT StudentName , MAX(TotalItem) AS TotalItem , MAX(TotalPage) AS TotalPage , MAX(PageSize) AS PageSize, MAX(PageIndex) AS PageIndex 
	FROM @Pagination
	WHERE RowNumber > ((@PageIndex - 1) * PageSize) AND RowNumber <= (@PageIndex * PageSize)
	GROUP BY StudentName
	--SELECT Name
	--FROM Student
	--ORDER By Name
	--OFFSET ((1 - 1) * (SELECT COUNT(Name)/3 FROM Student)) ROWS       
	--FETCH NEXT (SELECT COUNT(Name)/3 FROM Student) ROWS ONLY;
END
GO

