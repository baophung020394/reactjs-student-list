USE [Practise]
GO

/****** Object:  StoredProcedure [dbo].[DeleteUser]    Script Date: 9/13/2018 5:26:06 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteUser] 
	@Id int
As
BEGIN TRY
	DELETE FROM Student WHERE @Id = ID
	SELECT 'Delete student success' As 'Message'
END TRY
BEGIN CATCH
	SELECT 'ERROR' As 'Message'
END CATCH
GO

