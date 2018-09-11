USE [Practise]
GO

/****** Object:  StoredProcedure [dbo].[UpdateStudent]    Script Date: 9/11/2018 6:11:53 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateStudent]
	@Id Int,
	@Name Nvarchar(255),
	@RowVersion timestamp
As
BEGIN TRY
	BEGIN
		IF EXISTS(SELECT * FROM Student WHERE Name = @Name AND ID <> @Id)
		BEGIN
			SELECT 'Student existed' As 'Message'
		END
		ELSE
		BEGIN
			IF EXISTS(SELECT * FROM Student WHERE Row_Version = @RowVersion) 
				BEGIN
					UPDATE Student SET Name = @Name WHERE @Id = ID 
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

