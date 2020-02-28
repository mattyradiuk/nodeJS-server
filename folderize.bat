@echo off
for %%i in (\Movies\*) do (
 if not "%%~ni" == "organize" (
  md "%%~ni" && move "%%~i" "%%~ni"
 )
)