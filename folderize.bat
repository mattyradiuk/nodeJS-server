@echo off
for %%i in (\Server\Movies\*) do (
 if not "%%~ni" == "organize" (
  md "%%~ni" && move "%%~i" "%%~ni" && move "%%~ni" \Server\Movies\
 )
)