REM Powered by Valeria Astudillo
@echo off
ECHO.
ECHO 		    --------- CREATE REACT PROJECT ---------
ECHO.
ECHO Se procede a copiar el archivo package.json que almacena dependencias a instalar..
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.React.Shared\package.json" >> package.json

ECHO.
ECHO Se inicia la instalaci¢n de dependencias de desarrollo..
call npm install 

ECHO.
ECHO Se procede a crear y modificar los archivos de configuraci¢n de desarrollo..
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.React.Shared\tsconfig.json" >> tsconfig.json
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.React.Shared\server.js" >> server.js
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.React.Shared\.babelrc" >> .babelrc
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.React.Shared\webpack.config.js" >> webpack.config.js
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.React.Shared\index-app.html" >> index-app.html
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.React.Shared\app.shared.config.js" >> app.shared.config.js
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.React.Shared\app-desktop.js" >> app-desktop.js
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.React.Shared\app-desktop.css" >> app-desktop.css
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.React.Shared\kernel-react.shared.config.js" >> kernel-react.shared.config.js

ECHO.
ECHO Se crea estructura de carpetas para desarrollo..
robocopy "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.React.Shared\.vscode" ".vscode" /e
robocopy "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.React.Shared\redux" "redux" /e
robocopy "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.React.Shared\templates" "templates" /e
robocopy "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.React.Shared\ts" "ts" /e
robocopy "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.React.Shared\views" "views" /e

ECHO.
ECHO Se integra solución StartUp..
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\StartUp\REACT\StartUp\index.html" >> index.html
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\StartUp\REACT\StartUp\startup.shared.config.js" >> startup.shared.config.js
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\StartUp\REACT\StartUp\startup.config.js" >> startup.config.js
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\StartUp\REACT\StartUp\startup-desktop.js" >> startup-desktop.js
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\StartUp\REACT\StartUp\startup-desktop.css" >> startup-desktop.css
robocopy "D:\Portalestfs2015\Core\DEV\SOLUTIONS\StartUp\REACT\StartUp\bundle" "bundle" /e
robocopy "D:\Portalestfs2015\Core\DEV\SOLUTIONS\StartUp\REACT\StartUp\views" "views" /e
robocopy "D:\Portalestfs2015\Core\DEV\SOLUTIONS\StartUp\REACT\StartUp\js" "js" /e

ECHO.
ECHO Se integra Kernel_SPA_Shared..
robocopy "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.SPA.Shared\css" "css" /e 
robocopy "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.SPA.Shared\fonts" "fonts" /e 
robocopy "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.SPA.Shared\images" "images" /e 
robocopy "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.SPA.Shared\js" "js" /e 
robocopy "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.SPA.Shared\layouts" "layouts" /e 
robocopy "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.SPA.Shared\templates" "templates" /e /xd "omega" "porto"
type "D:\Portalestfs2015\Core\DEV\SOLUTIONS\Kernel\Kernel.SPA.Shared\kernel-shared.shared.config.js" >> kernel-shared.shared.config.js

ECHO.
ECHO    --------- La creaci¢n del proyecto ha finalizado correctamente ---------
ECHO.
PAUSE


