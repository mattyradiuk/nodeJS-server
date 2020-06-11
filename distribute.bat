@echo off
for /D %%a in ("Movies\*.*") do xcopy /y /d H:\Server\Movies\12.Monkeys.(1995)\index.html "%%a\"