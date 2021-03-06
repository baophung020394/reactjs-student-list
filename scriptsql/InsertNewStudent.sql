USE [Practise]
GO

/****** Object:  StoredProcedure [dbo].[InsertNewStudent]    Script Date: 9/20/2018 9:43:03 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertNewStudent] 
	@Name Nvarchar(255)
As
BEGIN TRY
	IF NULLIF(@Name, '') IS NULL
	BEGIN
		SELECT 'Please input value' As 'Message' 
	END
	ELSE 
	BEGIN
		IF EXISTS(SELECT * FROM Student WHERE @Name = Name) 
		BEGIN
			SELECT 'Student exist' As 'Message'
		END
		ELSE
		BEGIN
			INSERT INTO Student(Name) VALUES(@Name)
			SELECT 'Insert student success' As 'Message'
		END
	END
END TRY
BEGIN CATCH
	SELECT 'ERROR' As 'Message'
END CATCH
GO

