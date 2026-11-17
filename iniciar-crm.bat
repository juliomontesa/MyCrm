@echo off
chcp 65001 >nul
title Mi CRM
cd /d "%~dp0"

where python >nul 2>nul
if errorlevel 1 (
  echo.
  echo No encontre Python en este computador.
  echo Instalalo desde https://www.python.org/downloads/ y vuelve a abrir este archivo.
  echo.
  pause
  exit /b 1
)

python "servidor\servidor.py"
if errorlevel 1 pause
