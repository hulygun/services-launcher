___________
1. ОПИСАНИЕ
____________

Апплет запуска сервисов для cinnamon.

____________
2. УСТАНОВКА
____________

    git clone git@github.com:hulygun/services-launcher.git ~/.local/share/cinnamon/applets/serviceLauncher@hulygun

____________
3. НАСТРОЙКА
____________

Паттерн для сервисов: **{service 1 label}:{service1 name},{service 2 label}:{service2 name}**
Для разделения используйте **"separator"**

Например:

    Nginx Server:nginx,Apache Server:httpd,separator,Postgres Server:postgresql,Mysql Server:mysqld