USE [Practise]
GO

/****** Object:  StoredProcedure [dbo].[UpdateStudent]    Script Date: 9/20/2018 9:42:51 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateStudent]
	@Id Int,
	@Name Nvarchar(255),
	@RowVersion Nvarchar(255)
As
BEGIN TRY
	BEGIN
		IF EXISTS(SELECT * FROM Student WHERE Name = @Name AND ID <> @Id)
		BEGIN
			SELECT 'Student existed' As 'Message'
		END
		ELSE
		BEGIN
			IF EXISTS(SELECT * FROM Student WHERE Row_Version = CONVERT(VARBINARY(MAX),@RowVersion,1)) 
				BEGIN
					UPDATE Student SET Name = @Name WHERE ID = @Id
					SELECT 'Update student success' As 'Message' 
					
				END
			ELSE 
				BEGIN
					IF EXISTS (SELECT * FROM Student WHERE ID = @Id)
						BEGIN
							SELECT 'Student updated.' As 'Message'
						END
					ELSE
						BEGIN
							SELECT 'Student deleted.' As 'Message'
						END
				END
		END
	END
END TRY
BEGIN CATCH
	SELECT 'ERROR' As 'Message'
END CATCH
GO

