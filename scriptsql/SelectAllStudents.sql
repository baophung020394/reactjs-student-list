USE [Practise]
GO

/****** Object:  StoredProcedure [dbo].[SelectAllStudents]    Script Date: 9/11/2018 6:11:32 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SelectAllStudents] 
As
BEGIN 
	SELECT * FROM Student
END
GO

