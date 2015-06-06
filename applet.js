const Applet = imports.ui.applet;
const PopupMenu = imports.ui.popupMenu;
const Gettext = imports.gettext.domain('cinnamon-extensions');
const _ = Gettext.gettext;
const Util = imports.misc.util;
const Lang = imports.lang;
const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;
const AppletMeta = imports.ui.appletManager.applets['serviceLauncher@hulygun'];
const AppletDir = imports.ui.appletManager.appletMeta['serviceLauncher@hulygun'].path;

function ServiceCommand(service, command) {
	var com = 'gksudo systemctl '+command+' '+service+'.service';
	Util.spawnCommandLine(com)
}

function MyApplet(orientation){
    this._init(orientation);
}



MyApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(orientation){
        Applet.IconApplet.prototype._init.call(this, orientation);
        this.set_applet_icon_path( AppletDir + "/" + "web-programming.png");
        this.set_applet_tooltip("Запуск сервисов");

        //setup a new menuManager and add the main context main to the manager

				this.menuManager = new PopupMenu.PopupMenuManager(this);
				this.menu = new Applet.AppletPopupMenu(this, orientation);
				this.menuManager.addMenu(this.menu);
				// Nginx
				this.nginxEnabledSwitch = new PopupMenu.PopupSwitchMenuItem(_("Nginx Server"), false);
				this.nginxEnabledSwitch.connect('toggled', function(item){
					var command;
					if (item.state) {
						command = 'start';
					} else {
						command = 'stop';
					}
					ServiceCommand('nginx', command);
				});
				this.menu.addMenuItem(this.nginxEnabledSwitch);
				// Apache
				this.apacheEnabledSwitch = new PopupMenu.PopupSwitchMenuItem(_("Apache Server"), false);
				this.apacheEnabledSwitch.connect('toggled', function(item){
					var command;
					if (item.state) {
						command = 'start';
					} else {
						command = 'stop';
					}
					ServiceCommand('apache', command);
				});
				this.menu.addMenuItem(this.apacheEnabledSwitch);

				this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem());

				// Mysql
				this.mysqlEnabledSwitch = new PopupMenu.PopupSwitchMenuItem(_("MySQL Server"), false);
				this.mysqlEnabledSwitch.connect('toggled', function(item){
					var command;
					if (item.state) {
						command = 'start';
					} else {
						command = 'stop';
					}
					ServiceCommand('mysqld', command);
				});
				this.menu.addMenuItem(this.mysqlEnabledSwitch);
				// Postgres
				this.postgresEnabledSwitch = new PopupMenu.PopupSwitchMenuItem(_("Postgres Server"), false);
				this.postgresEnabledSwitch.connect('toggled', function(item){
					var command;
					if (item.state) {
						command = 'start';
					} else {
						command = 'stop';
					}
					ServiceCommand('postgresql', command);
				});
				this.menu.addMenuItem(this.postgresEnabledSwitch);

				this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem());

				// ElasticSearch
				this.esEnabledSwitch = new PopupMenu.PopupSwitchMenuItem(_("ElasticSearch"), false);
				this.esEnabledSwitch.connect('toggled', function(item){
					var command;
					if (item.state) {
						command = 'start';
					} else {
						command = 'stop';
					}
					ServiceCommand('elasticsearch', command);
				});
				this.menu.addMenuItem(this.esEnabledSwitch);


    },

	  on_applet_clicked: function(){
		    this.menu.toggle();
    },
}


function main(metadata, orientation){
    let myApplet = new MyApplet(orientation);
    return myApplet;
}
