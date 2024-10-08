(this.webpackJsonpsavemanager = this.webpackJsonpsavemanager || []).push([
    [0],
    {
        102: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.getIcon = function (e) {
                    return "dir" === e.type
                        ? { svg: l, fill: "#424242" }
                        : b(e.name, m)
                        ? { svg: o, fill: "#e53935" }
                        : b(e.name, p)
                        ? { svg: u, fill: "#e53935" }
                        : b(e.name, v)
                        ? { svg: d, fill: "#e53935" }
                        : b(e.name, g)
                        ? { svg: s, fill: "#616161" }
                        : b(e.name, h)
                        ? { svg: c, fill: "#e53935" }
                        : { svg: f, fill: "#616161" };
                });
            var a,
                i = n(17),
                r = (a = i) && a.__esModule ? a : { default: a };
            var l = r.default.folder,
                o = r.default.volumeUp,
                u = r.default.image,
                d = r.default.ondemandVideo,
                s = r.default.archive,
                c = r.default.book,
                f = r.default.insertDriveFile,
                m = ["aac", "aiff", "flac", "m4a", "ogg", "mp3", "wav", "wma"],
                p = ["gif", "png", "jpg", "jpeg", "bmp", "svg"],
                v = ["avi", "flv", "wmv", "mov", "mp4"],
                g = ["tar", "zip", "gz", "bz2", "rar"],
                h = ["pdf", "epub", "fb2"];
            function b(e, t) {
                var n = "(" + t.join("|") + ")";
                return t.some(function (t) {
                    return new RegExp("^.*." + n + "$").test(e.toLowerCase());
                });
            }
        },
        112: function (e, t, n) {},
        113: function (e, t, n) {},
        15: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = function (e) {
                    var t = e.getNotifications,
                        n = e.label,
                        a = e.notificationId,
                        i = e.updateNotifications,
                        l = e.message,
                        o = t(),
                        u = r.default.removeNotification(o, a),
                        d = {
                            title: l || n + " error",
                            minimizable: !1,
                            closable: !0,
                            children: [],
                            onHide: function (e) {
                                return i(r.default.removeNotification(o, a));
                            },
                        },
                        s = r.default.getNotification(o, a);
                    (u = s ? r.default.updateNotification(o, a, d) : r.default.addNotification(o, a, d)), i(u);
                });
            var a,
                i = n(53),
                r = (a = i) && a.__esModule ? a : { default: a };
        },
        158: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = {});
        },
        159: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = d(n(160)),
                i = d(n(268)),
                r = d(n(269)),
                l = d(n(275)),
                o = d(n(277)),
                u = d(n(278));
            function d(e) {
                return e && e.__esModule ? e : { default: e };
            }
            var s = [a.default, o.default, r.default, l.default, i.default, u.default];
            t.default = function (e, t) {
                return s.map(function (n) {
                    return n(e, t);
                });
            };
        },
        160: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = s(n(3)),
                i = s(n(4)),
                r = s(n(8)),
                l = s(n(80)),
                o = s(n(15)),
                u = s(n(17)),
                d = s(n(18));
            function s(e) {
                return e && e.__esModule ? e : { default: e };
            }
            var c = "createFolder";
            t.default = function (e, t) {
                var n = (0, d.default)(e.locale, c),
                    s = t.getResource;
                return {
                    id: c,
                    icon: { svg: u.default.createNewFolder },
                    label: n,
                    shouldBeAvailable: function (e) {
                        var t = s();
                        return !(!t || !t.capabilities) && t.capabilities.canAddChildren;
                    },
                    availableInContexts: ["files-view", "new-button"],
                    handler: function () {
                        return (function (e, t) {
                            var n = this,
                                u = t.showDialog,
                                s = t.hideDialog,
                                f = t.navigateToDir,
                                m = t.updateNotifications,
                                p = t.getResource,
                                v = t.getNotifications,
                                g = d.default.bind(null, e.locale);
                            u({
                                elementType: "SetNameDialog",
                                elementProps: {
                                    onHide: s,
                                    onSubmit: (function () {
                                        var t = (0, i.default)(
                                            a.default.mark(function t(i) {
                                                var l, u;
                                                return a.default.wrap(
                                                    function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return (l = p()), (t.prev = 1), (t.next = 4), r.default.getChildrenForId(e, { id: l.id });
                                                                case 4:
                                                                    if (
                                                                        !t.sent.some(function (e) {
                                                                            return e.name === i;
                                                                        })
                                                                    ) {
                                                                        t.next = 10;
                                                                        break;
                                                                    }
                                                                    return t.abrupt("return", g("fileExist", { name: i }));
                                                                case 10:
                                                                    return s(), (t.next = 13), r.default.createFolder(e, l.id, i);
                                                                case 13:
                                                                    (u = t.sent), f(l.id, u, !1);
                                                                case 15:
                                                                    return t.abrupt("return", null);
                                                                case 18:
                                                                    return (
                                                                        (t.prev = 18),
                                                                        (t.t0 = t.catch(1)),
                                                                        s(),
                                                                        (0, o.default)({ getNotifications: v, label: g(c), notificationId: c, updateNotifications: m }),
                                                                        console.log(t.t0),
                                                                        t.abrupt("return", null)
                                                                    );
                                                                case 24:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    n,
                                                    [[1, 18]]
                                                );
                                            })
                                        );
                                        return function (e) {
                                            return t.apply(this, arguments);
                                        };
                                    })(),
                                    onValidate: (function () {
                                        var e = (0, i.default)(
                                            a.default.mark(function e(t) {
                                                return a.default.wrap(
                                                    function (e) {
                                                        for (;;)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    if (t) {
                                                                        e.next = 4;
                                                                        break;
                                                                    }
                                                                    return e.abrupt("return", g("emptyName"));
                                                                case 4:
                                                                    if ("CON" !== t) {
                                                                        e.next = 8;
                                                                        break;
                                                                    }
                                                                    return e.abrupt("return", g("doNotRespectBill"));
                                                                case 8:
                                                                    if (!(t.length >= 255)) {
                                                                        e.next = 12;
                                                                        break;
                                                                    }
                                                                    return e.abrupt("return", g("tooLongFolderName"));
                                                                case 12:
                                                                    if (t.trim() === (0, l.default)(t.trim())) {
                                                                        e.next = 14;
                                                                        break;
                                                                    }
                                                                    return e.abrupt("return", g("folderNameNotAllowedCharacters"));
                                                                case 14:
                                                                    return e.abrupt("return", null);
                                                                case 15:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    },
                                                    e,
                                                    n
                                                );
                                            })
                                        );
                                        return function (t) {
                                            return e.apply(this, arguments);
                                        };
                                    })(),
                                    inputLabelText: g("folderName"),
                                    headerText: g("createFolder"),
                                    submitButtonText: g("create"),
                                    cancelButtonText: g("cancel"),
                                },
                            });
                        })(e, t);
                    },
                };
            };
        },
        17: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = {
                    fileDownload: '<svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" focusable="false"><path d="M38 18h-8V6H18v12h-8l14 14 14-14zM10 36v4h28v-4H10z"/></svg>',
                    fileUpload: '<svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" focusable="false"><path d="M18 32h12V20h8L24 6 10 20h8zm-8 4h28v4H10z"/></svg>',
                    createNewFolder:
                        '<svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" focusable="false"><path d="M40 12H24l-4-4H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm-2 16h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"/></svg>',
                    delete: '<svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" focusable="false"><path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"/></svg>',
                    rename:
                        '<svg class="a-s-fa-Ha-pa" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" focusable="false" fill="rgba(0, 0, 0, 0.72)"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6 17v-2.47l7.88-7.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 17H6zm12 0h-7.5l2-2H18v2z"></path></svg>',
                    folder:
                        '<svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" focusable="false"><path d="M20 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4H24l-4-4z"/></svg>',
                    volumeUp:
                        '<svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" focusable="false"><path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"/></svg>',
                    image:
                        '<svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" focusable="false"><path d="M42 38V10c0-2.21-1.79-4-4-4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4zM17 27l5 6.01L29 24l9 12H10l7-9z"/></svg>',
                    ondemandVideo:
                        '<svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" focusable="false"><path d="M42 6H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h10v4h16v-4h10c2.21 0 3.98-1.79 3.98-4L46 10c0-2.21-1.79-4-4-4zm0 28H6V10h36v24zM32 22l-14 8V14z"/></svg>',
                    archive:
                        '<svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" focusable="false"><path d="M41.09 10.45l-2.77-3.36C37.76 6.43 36.93 6 36 6H12c-.93 0-1.76.43-2.31 1.09l-2.77 3.36C6.34 11.15 6 12.03 6 13v25c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V13c0-.97-.34-1.85-.91-2.55zM24 35L13 24h7v-4h8v4h7L24 35zM10.25 10l1.63-2h24l1.87 2h-27.5z"/></svg>',
                    book:
                        '<svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" focusable="false"><path d="M36 4H12C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 8h10v16l-5-3-5 3V8z"/></svg>',
                    insertDriveFile:
                        '<svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" focusable="false"><path d="M12 4C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V16L28 4H12zm14 14V7l11 11H26z"/></svg>',
                    warning: "",
                });
        },
        18: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = function (e, t, n) {
                    var i = a[e] && a[e][t] ? a[e][t] : a.en[t];
                    if (!n) return i;
                    return i.replace(/{\w+}/g, function (e) {
                        var t = e.slice(1, -1);
                        return n[t] ? n[t] : "";
                    });
                });
            var a = {
                en: {
                    uploading: "Uploading",
                    uploadingItem: "Uploading 1 item",
                    uploadingItems: "Uploading {quantity} items",
                    upload: "Upload",
                    remove: "Remove",
                    download: "Download",
                    rename: "Rename",
                    creating: "Creating",
                    creatingName: "Creating {name}...",
                    create: "Create",
                    createFolder: "Create folder",
                    zipping: "Zipping",
                    zippingItem: "Zipping 1 item",
                    zippingItems: "Zipping {quantity} items",
                    items: "items",
                    item: "item",
                    cancel: "Cancel",
                    confirm: "Confirm",
                    folderName: "Folder name",
                    files: "files",
                    fileExist: "File or folder with name {name} already exists",
                    newName: "New name",
                    emptyName: "Name can't be empty",
                    tooLongFolderName: "Folder name can't contain more than 255 characters",
                    folderNameNotAllowedCharacters: "Folder name contains not allowed characters",
                    title: "Title",
                    fileSize: "File size",
                    lastModified: "Last modified",
                    reallyRemove: "{files} will be deleted. Do you really want to proceed?",
                    unableReadDir: "Unable to read a directory.",
                },
                fr: {
                    uploading: "Ajout d'un document en cours",
                    uploadingItem: "Ajout en cours d'un fichier",
                    uploadingItems: "Ajout en cours de {quantity} fichiers",
                    upload: "Ajouter un document",
                    remove: "Supprimer",
                    download: "T\xe9l\xe9chargement",
                    rename: "Renommer",
                    creating: "Cr\xe9ation",
                    creatingName: "Cr\xe9ation {name}...",
                    create: "Cr\xe9er",
                    createFolder: "Cr\xe9er un dossier",
                    zipping: "Archivage",
                    zippingItem: "Archivage d'un fichier",
                    zippingItems: "Archivage de {quantity} fichiers",
                    items: "fichiers",
                    item: "fichier",
                    cancel: "Annuler",
                    confirm: "Confirmer",
                    folderName: "Nom du dossier",
                    files: "fichiers",
                    fileExist: "Fichier ou dossier avec ce nom {name} existe d\xe9j\xe0",
                    newName: "Nouveau nom",
                    emptyName: "Le nom ne peut \xeatre vide",
                    tooLongFolderName: "Le nom du dossier contiens plus de 255 lettres",
                    folderNameNotAllowedCharacters: "Le nom du dossier de contiens pas assez de lettres",
                    title: "Titre",
                    fileSize: "Taille (Ko)",
                    lastModified: "Derni\xe8re modification",
                    reallyRemove: "{files} vas \xeatre supprimer. Voulez vous confirmer ?",
                    unableReadDir: "Vous ne pouvez pas lire se contenue.",
                    quota: "Vous n'avez plus d'espace de stockage",
                },
                zh: {
                    uploading: "\u6b63\u5728\u4e0a\u4f20\u4e2d",
                    uploadingItem: "\u6b63\u5728\u4e0a\u4f201\u4e2a\u6587\u4ef6",
                    uploadingItems: "\u6b63\u5728\u4e0a\u4f20{quantity}\u4e2a\u6587\u4ef6",
                    upload: "\u4e0a\u4f20",
                    remove: "\u79fb\u9664",
                    download: "\u4e0b\u8f7d",
                    rename: "\u91cd\u547d\u540d",
                    creating: "\u6b63\u5728\u521b\u5efa\u4e2d",
                    creatingName: "\u6b63\u5728\u521b\u5efa {name} \u4e2d...",
                    create: "\u521b\u5efa",
                    createFolder: "\u521b\u5efa\u6587\u4ef6\u5939",
                    zipping: "\u6b63\u5728\u538b\u7f29\u4e2d",
                    zippingItem: "\u6b63\u5728\u538b\u7f291\u4e2a\u6587\u4ef6",
                    zippingItems: "\u6b63\u5728\u538b\u7f29{quantity}\u4e2a\u6587\u4ef6",
                    items: "\u6587\u4ef6",
                    item: "\u6587\u4ef6",
                    cancel: "\u53d6\u6d88",
                    confirm: "\u786e\u5b9a",
                    folderName: "\u6587\u4ef6\u5939\u540d\u79f0",
                    files: "\u6587\u4ef6",
                    fileExist: "\u5df2\u5b58\u5728{name}",
                    newName: "\u65b0\u540d\u79f0",
                    emptyName: "\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a",
                    tooLongFolderName: "\u6587\u4ef6\u5939\u540d\u79f0\u4e0d\u80fd\u8d85\u8fc7255\u4e2a\u5b57\u7b26",
                    folderNameNotAllowedCharacters: "\u6587\u4ef6\u5939\u540d\u79f0\u4e0d\u5141\u8bb8\u5b58\u5728\u7279\u6b8a\u5b57\u7b26",
                    title: "\u6807\u9898",
                    fileSize: "\u6587\u4ef6\u5927\u5c0f",
                    lastModified: "\u6700\u8fd1\u4fee\u6539\u65f6\u95f4",
                    reallyRemove: "{files}\u5c06\u4f1a\u88ab\u5220\u9664,\u8bf7\u786e\u8ba4!",
                    unableReadDir: "\u65e0\u6cd5\u8bfb\u53d6\u6587\u4ef6\u5939",
                },
                de: {
                    uploading: "Wird hochgeladen",
                    uploadingItem: "1 Element wird geladen",
                    uploadingItems: "{quantity} Elemente werden geladen",
                    upload: "Hochladen",
                    remove: "L\xf6schen",
                    download: "Herunterladen",
                    rename: "Umbenennen",
                    creating: "Wird erstellt",
                    creatingName: "{name} wird angelegt...",
                    create: "Erstellen",
                    createFolder: "Verzeichnis erstellen",
                    zipping: "Zippen",
                    items: "Elemente",
                    item: "Element",
                    cancel: "Stornieren",
                    confirm: "Best\xe4tigen",
                    folderName: " Verzeichnisname",
                    files: "Dateien",
                    fileExist: "Die Datei oder Verzeichnis mit dem Namen {name} existiert bereits",
                    newName: "Neuer Name",
                    emptyName: "Der Name darf nicht leer sein",
                    tooLongFolderName: "Der Verzeichnisname darf nicht mehr als 255 Symbole enthalten",
                    folderNameNotAllowedCharacters: "Das Verzeichnisname enth\xe4lt nicht erlaubte Zeichen",
                    title: "Titel",
                    fileSize: "Dateigr\xf6\xdfe",
                    lastModified: "Zuletzt ge\xe4ndert",
                    reallyRemove: "{files}  wird/werden gel\xf6scht. M\xf6chten Sie wirklich fortfahren?",
                    unableReadDir: "Ein Directory kann nicht gelesen werden.",
                },
                fi: {
                    uploading: "Siirret\xe4\xe4n palvelimeen",
                    uploadingItem: "Ladataan 1 nimike",
                    uploadingItems: "Ladataan {quantity} nimikett\xe4",
                    upload: "Siirr\xe4 palvelimeen",
                    remove: "Poista",
                    download: "Lataa",
                    rename: "Nime\xe4 uudelleen",
                    creating: "Luodaan",
                    creatingName: "Luodaan {name}...",
                    create: "Luo",
                    createFolder: "Luo kansio",
                    zipping: "Pakataan",
                    zippingItem: "Pakataan 1 nimike",
                    zippingItems: "Pakataan {quantity} nimikett\xe4",
                    items: "nimikett\xe4",
                    item: "nimike",
                    cancel: "Peruuta",
                    confirm: "Vahvista",
                    folderName: "Kansion nimi",
                    files: "tiedostot",
                    fileExist: "Tiedosto tai kansio, jonka nimi on {name} on jo luotu",
                    newName: "Uusi nimi",
                    emptyName: "Nimi ei voi olla tyhj\xe4",
                    tooLongFolderName: "Kansion nimi saa sis\xe4lt\xe4\xe4 enint\xe4\xe4n 255 merkki\xe4",
                    folderNameNotAllowedCharacters: "Kansion nimess\xe4 on kiellettyj\xe4 merkkej\xe4",
                    title: "Otsikko",
                    fileSize: "Tiedostokoko",
                    lastModified: "Muokattu viimeksi",
                    reallyRemove: "{files} poistetaan. Haluatko varmasti jatkaa?",
                    unableReadDir: "Hakemistoa ei voi lukea.",
                },
                hu: {
                    uploading: "Felt\xf6lt\xe9s",
                    uploadingItem: "1 elem felt\xf6lt\xe9se",
                    uploadingItems: "{quantity} elem felt\xf6lt\xe9se",
                    upload: "Felt\xf6lt\xe9s",
                    remove: "T\xf6rl\xe9s",
                    download: "Let\xf6lt\xe9s",
                    rename: "\xc1tnevez\xe9s",
                    creating: "L\xe9trehoz\xe1s",
                    creatingName: "{name} l\xe9trehoz\xe1sa...",
                    create: "L\xe9trehoz",
                    createFolder: "Mappa l\xe9trehoz\xe1sa",
                    zipping: "T\xf6m\xf6r\xedt\xe9s",
                    zippingItem: "1 elem t\xf6m\xf6r\xedt\xe9se",
                    zippingItems: "{quantity} elem t\xf6m\xf6r\xedt\xe9se",
                    items: "elemek",
                    item: "elem",
                    cancel: "M\xe9gse",
                    confirm: "Meger\u0151s\xedt",
                    folderName: "Mappa neve",
                    files: "F\xe1jlok",
                    fileExist: "F\xe1jl vagy mappa {name} n\xe9vvel nem l\xe9tezik",
                    newName: "\xdaj n\xe9v",
                    emptyName: "N\xe9v nem lehet \xfcres",
                    tooLongFolderName: "Mappa neve nem lehet 255 karaktern\xe9l hosszabb",
                    folderNameNotAllowedCharacters: "Mappa neve tiltott karaktereket tartalmaz",
                    title: "C\xedm",
                    fileSize: "F\xe1jl m\xe9rete",
                    lastModified: "Utolj\xe1ra m\xf3dos\xedtva",
                    reallyRemove: "{files} f\xe1jl t\xf6r\xf6lve lesz. T\xe9nyleg folytatni akarja?",
                    unableReadDir: "Nem lehet olvasni a k\xf6nyvt\xe1rat.",
                },
                no: {
                    uploading: "Opplasting",
                    uploadingItem: "Laster opp 1 element",
                    uploadingItems: "Laster opp {quantity} elementer",
                    upload: "Last opp",
                    remove: "Fjern",
                    download: "Last ned",
                    rename: "Gi nytt navn",
                    creating: "Opprette",
                    creatingName: "Opprette {name}...",
                    create: "Opprett",
                    createFolder: "Opprett mappe",
                    zipping: "Zipper",
                    zippingItem: "Zipper 1 element",
                    zippingItems: "Zipper {quantity} elementer",
                    items: "elementer",
                    item: "element",
                    cancel: "Avbryt",
                    confirm: "Bekreft",
                    folderName: "Mappenavn",
                    files: "filer",
                    fileExist: "Fil eller mappe med navn {name} eksisterer allerede",
                    newName: "Nytt navn",
                    emptyName: "Navnet kan ikke v\xe6re tomt",
                    tooLongFolderName: "Mappenavn kan ikke inneholde mer enn 255 tegn",
                    folderNameNotAllowedCharacters: "Mappenavn inneholder tegn som ikke er tillatt",
                    title: "Tittel",
                    fileSize: "Filst\xf8rrelse",
                    lastModified: "Sist endret",
                    reallyRemove: "{files} vil bli slettet. Vil du fortsette?",
                    unableReadDir: "Kan ikke lese en katalog.",
                },
                ru: {
                    uploading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",
                    uploadingItem: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 1 \u043f\u043e\u0437\u0438\u0446\u0438\u0438",
                    uploadingItems: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 {quantity} \u043f\u043e\u0437\u0438\u0446\u0438\u0439",
                    upload: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",
                    remove: "Remove",
                    download: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c",
                    rename: "\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c",
                    creating: "\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435",
                    creatingName: "\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 {name}...",
                    create: "\u0421\u043e\u0437\u0434\u0430\u0442\u044c",
                    createFolder: "\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0430\u043f\u043a\u0443",
                    zipping: "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",
                    zippingItem: "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 1 \u043f\u043e\u0437\u0438\u0446\u0438\u0438",
                    zippingItems: "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 {quantity} \u043f\u043e\u0437\u0438\u0446\u0438\u0439",
                    items: "\u043f\u043e\u0437\u0438\u0446\u0438\u0438",
                    item: "\u043f\u043e\u0437\u0438\u0446\u0438\u044f",
                    cancel: "\u041e\u0442\u043c\u0435\u043d\u0430",
                    confirm: "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c",
                    folderName: "\u0418\u043c\u044f \u043f\u0430\u043f\u043a\u0438",
                    files: "\u0444\u0430\u0439\u043b\u044b",
                    fileExist: "\u0424\u0430\u0439\u043b \u0438\u043b\u0438 \u043f\u0430\u043f\u043a\u0430 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c {name} \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442",
                    newName: "\u041d\u043e\u0432\u043e\u0435 \u0438\u043c\u044f",
                    emptyName: "\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",
                    tooLongFolderName:
                        "\u0418\u043c\u044f \u043f\u0430\u043f\u043a\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 255 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",
                    folderNameNotAllowedCharacters:
                        "\u0418\u043c\u044f \u043f\u0430\u043f\u043a\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b",
                    title: "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",
                    fileSize: "\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u0430\u043f\u043a\u0438",
                    lastModified: "\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435",
                    reallyRemove: "{files} \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u044b. \u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c?",
                    unableReadDir: "\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043a\u0430\u0442\u0430\u043b\u043e\u0433.",
                },
                sv: {
                    uploading: "\xd6verf\xf6r",
                    uploadingItem: "\xd6verf\xf6r 1 post",
                    uploadingItems: "\xd6verf\xf6r {quantity} poster",
                    upload: "\xd6verf\xf6r",
                    remove: "Ta bort",
                    download: "H\xe4mta",
                    rename: "\xc4ndra namn",
                    creating: "Skapar",
                    creatingName: "Skapar {name}...",
                    create: "Skapa",
                    createFolder: "Skapa mapp",
                    zipping: "Komprimerar",
                    zippingItem: "Komprimerar 1 post",
                    zippingItems: "Komprimerar {quantity} poster",
                    items: "poster",
                    item: "post",
                    cancel: "Avbryt",
                    confirm: "Bekr\xe4fta",
                    folderName: "Mappnamn",
                    files: "filer",
                    fileExist: "Fil eller mapp med namnet {name} existerar redan",
                    newName: "Nytt namn",
                    emptyName: "Namnet f\xe5r inte vara tomt",
                    tooLongFolderName: "Mappnamnet kan inte inneh\xe5lla mer \xe4n 255 tecken",
                    folderNameNotAllowedCharacters: "Mappnamnet inneh\xe5ller otill\xe5tna tecken",
                    title: "Rubrik",
                    fileSize: "Filstorlek",
                    lastModified: "Senast \xe4ndrad",
                    reallyRemove: "{files} kommer att tas bort. Vill du verkligen forts\xe4tta?",
                    unableReadDir: "Det gick inte att l\xe4sa en katalog.",
                },
            };
        },
        19: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = u(n(8)),
                i = u(n(158)),
                r = u(n(159)),
                l = u(n(279)),
                o = u(n(282));
            function u(e) {
                return e && e.__esModule ? e : { default: e };
            }
            t.default = { api: a.default, apiOptions: i.default, capabilities: r.default, listViewLayout: l.default, viewLayoutOptions: o.default };
        },
        268: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = d(n(3)),
                i = d(n(4)),
                r = d(n(8)),
                l = d(n(15)),
                o = d(n(17)),
                u = d(n(18));
            function d(e) {
                return e && e.__esModule ? e : { default: e };
            }
            var s = "remove";
            t.default = function (e, t) {
                var n = (0, u.default)(e.locale, s),
                    d = t.getSelectedResources;
                return {
                    id: "delete",
                    icon: { svg: o.default.delete },
                    label: n,
                    shouldBeAvailable: function (e) {
                        var t = d();
                        return (
                            !!t.length &&
                            t.every(function (e) {
                                return e.capabilities.canDelete;
                            })
                        );
                    },
                    availableInContexts: ["row", "toolbar"],
                    handler: function () {
                        return (function (e, t) {
                            var n = this,
                                o = t.showDialog,
                                d = t.hideDialog,
                                c = t.navigateToDir,
                                f = t.updateNotifications,
                                m = t.getSelectedResources,
                                p = t.getResource,
                                v = t.getNotifications,
                                g = u.default.bind(null, e.locale),
                                h = m(),
                                b = h.length > 1 ? h.length + " " + g("files") : '"' + h[0].name + '"',
                                w = g("reallyRemove", { files: b });
                            o({
                                elementType: "ConfirmDialog",
                                elementProps: {
                                    onHide: d,
                                    onSubmit: (function () {
                                        var t = (0, i.default)(
                                            a.default.mark(function t() {
                                                var i;
                                                return a.default.wrap(
                                                    function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return d(), (t.prev = 1), (t.next = 4), r.default.removeResources(e, h);
                                                                case 4:
                                                                    (i = p()), c(i.id, null, !1), (t.next = 12);
                                                                    break;
                                                                case 8:
                                                                    (t.prev = 8), (t.t0 = t.catch(1)), (0, l.default)({ getNotifications: v, label: g(s), notificationId: "delete", updateNotifications: f }), console.log(t.t0);
                                                                case 12:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    n,
                                                    [[1, 8]]
                                                );
                                            })
                                        );
                                        return function () {
                                            return t.apply(this, arguments);
                                        };
                                    })(),
                                    headerText: g("remove"),
                                    messageText: w,
                                    cancelButtonText: g("cancel"),
                                    submitButtonText: g("confirm"),
                                },
                            });
                        })(e, t);
                    },
                };
            };
        },
        269: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = p(n(3)),
                i = p(n(30)),
                r = p(n(4)),
                l = (function () {
                    var e = (0, r.default)(
                        a.default.mark(function e(t, n) {
                            var r, l, f, p, g, h, b, w, y, N, x, k, z, M;
                            return a.default.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                if (
                                                    ((r = n.updateNotifications),
                                                    (l = n.getSelectedResources),
                                                    (f = n.getNotifications),
                                                    (p = m.default.bind(null, t.locale)),
                                                    (g = v),
                                                    (h = (0, c.default)()),
                                                    (b = function (e) {
                                                        var t = e.archiveName,
                                                            n = e.quantity,
                                                            a = f(),
                                                            i = u.default.getNotification(a, g),
                                                            l = { elementType: "NotificationProgressItem", elementProps: { title: p("creatingName", { name: t }), progress: 0 } },
                                                            o = u.default.addChild((i && i.children) || [], h, l),
                                                            d = { title: n > 1 ? p("zippingItems", { quantity: n }) : p("zippingItem"), children: o },
                                                            s = i ? u.default.updateNotification(a, g, d) : u.default.addNotification(a, g, d);
                                                        r(s);
                                                    }),
                                                    (w = function (e) {
                                                        var t = f(),
                                                            n = u.default.getNotification(t, g),
                                                            a = void 0;
                                                        (a = n.children.length > 1 ? u.default.updateNotification(t, g, { children: u.default.removeChild(n.children, h) }) : u.default.removeNotification(t, g)), r(a);
                                                    }),
                                                    (y = function (e) {
                                                        var t = f(),
                                                            n = u.default.getNotification(t, g),
                                                            a = u.default.getChild(n.children, h),
                                                            l = (0, i.default)({}, a, { element: (0, i.default)({}, a.element, { elementProps: (0, i.default)({}, a.element.elementProps, { progress: e }) }) }),
                                                            o = u.default.updateChild(n.children, h, l),
                                                            d = u.default.updateNotification(t, g, { children: o });
                                                        r(d);
                                                    }),
                                                    (e.prev = 7),
                                                    (N = l()),
                                                    1 !== (x = N.length))
                                                ) {
                                                    e.next = 17;
                                                    break;
                                                }
                                                return (e.next = 13), o.default.downloadResources({ resources: N, apiOptions: t, onProgress: y });
                                            case 13:
                                                (k = e.sent), (0, d.promptToSaveBlob)({ content: k, name: N[0].name }), (e.next = 24);
                                                break;
                                            case 17:
                                                return (z = t.archiveName || "archive.zip"), b({ archiveName: z, quantity: x }), (e.next = 21), o.default.downloadResources({ resources: N, apiOptions: t, onProgress: y });
                                            case 21:
                                                (M = e.sent), setTimeout(w, 1e3), (0, d.promptToSaveBlob)({ content: M, name: z });
                                            case 24:
                                                e.next = 30;
                                                break;
                                            case 26:
                                                (e.prev = 26), (e.t0 = e.catch(7)), (0, s.default)({ getNotifications: f, label: p(v), notificationId: g, updateNotifications: r }), console.log(e.t0);
                                            case 30:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                this,
                                [[7, 26]]
                            );
                        })
                    );
                    return function (t, n) {
                        return e.apply(this, arguments);
                    };
                })(),
                o = p(n(8)),
                u = p(n(53)),
                d = n(270),
                s = p(n(15)),
                c = p(n(101)),
                f = p(n(17)),
                m = p(n(18));
            function p(e) {
                return e && e.__esModule ? e : { default: e };
            }
            var v = "download";
            t.default = function (e, t) {
                var n = (0, m.default)(e.locale, v),
                    a = t.getSelectedResources;
                return {
                    id: v,
                    icon: { svg: f.default.fileDownload },
                    label: n,
                    shouldBeAvailable: function (e) {
                        var t = a();
                        return (
                            t.length > 0 &&
                            !t.some(function (e) {
                                return "dir" === e.type;
                            }) &&
                            t.every(function (e) {
                                return e.capabilities.canDownload;
                            })
                        );
                    },
                    availableInContexts: ["row", "toolbar"],
                    handler: function () {
                        return l(e, t);
                    },
                };
            };
        },
        270: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.triggerHiddenForm = t.promptToSaveBlob = void 0);
            var a,
                i = n(271),
                r = (a = i) && a.__esModule ? a : { default: a };
            (t.promptToSaveBlob = function (e) {
                var t = e.content,
                    n = e.name,
                    a = e.downloadUrl;
                if (a) {
                    var i = "oc-fm--filemanager-download-iframe",
                        l = document.getElementById(i);
                    l || (((l = document.createElement("iframe")).style.display = "none"), (l.id = i), document.body.appendChild(l)), (l.src = a);
                } else {
                    var o = new Blob([t.file], { type: "octet/stream" });
                    r.default.saveAs(o, n);
                }
            }),
                (t.triggerHiddenForm = function (e) {
                    var t = e.downloadUrl,
                        n = e.target,
                        a = void 0 === n ? "_self" : n,
                        i = document.createElement("form");
                    (i.action = t), (i.target = a), (i.method = "GET"), document.body.appendChild(i), i.submit(), document.body.removeChild(i);
                });
        },
        275: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = v(n(3)),
                i = v(n(30)),
                r = v(n(4)),
                l = (function () {
                    var e = (0, r.default)(
                        a.default.mark(function e(t, n) {
                            var r, l, m, v, h, b, w, y, N, x, k, z, M, I, C, _, S;
                            return a.default.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (r = n.navigateToDir),
                                                    (l = n.updateNotifications),
                                                    (m = n.getResource),
                                                    (v = n.getNotifications),
                                                    (h = p.default.bind(null, t.locale)),
                                                    (b = g),
                                                    (w = (0, s.default)()),
                                                    (y = m().id),
                                                    (N = function (e) {
                                                        var t = e.name,
                                                            n = (e.size, v()),
                                                            a = u.default.getNotification(n, b),
                                                            i = { elementType: "NotificationProgressItem", elementProps: { title: t, progress: 0, icon: (0, d.getIcon)({ name: t }) } },
                                                            r = u.default.addChild((a && a.children) || [], w, i),
                                                            o = { title: r.length > 1 ? h("uploadingItems", { quantity: r.length }) : h("uploadingItem"), children: r },
                                                            s = a ? u.default.updateNotification(n, b, o) : u.default.addNotification(n, b, o);
                                                        l(s);
                                                    }),
                                                    (x = function (e) {
                                                        var t = v(),
                                                            n = u.default.getNotification(t, b),
                                                            a = u.default.getChild(n.children, w),
                                                            r = (0, i.default)({}, a, { element: (0, i.default)({}, a.element, { elementProps: (0, i.default)({}, a.element.elementProps, { progress: e }) }) }),
                                                            o = u.default.updateChild(n.children, w, r),
                                                            d = u.default.updateNotification(t, b, { children: o });
                                                        l(d);
                                                    }),
                                                    (k = m()),
                                                    (e.prev = 8),
                                                    (e.next = 11),
                                                    (0, f.readLocalFile)(!0)
                                                );
                                            case 11:
                                                return (z = e.sent), N({ name: z.name, size: z.file.size }), (e.next = 15), o.default.uploadFileToId({ apiOptions: t, parentId: k.id, file: z, onProgress: x });
                                            case 15:
                                                (M = e.sent),
                                                    (I = v()),
                                                    (C = u.default.getNotification(I, b)),
                                                    (_ = C.children.length),
                                                    (S = void 0),
                                                    (S = _ > 1 ? u.default.updateNotification(I, b, { children: u.default.removeChild(C.children, w) }) : u.default.removeNotification(I, b)),
                                                    l(S),
                                                    y === k.id && r(k.id, M.id, !1),
                                                    (e.next = 29);
                                                break;
                                            case 25:
                                                (e.prev = 25), (e.t0 = e.catch(8)), (0, c.default)({ getNotifications: v, label: h(g), notificationId: b, updateNotifications: l }), console.log(e.t0);
                                            case 29:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                this,
                                [[8, 25]]
                            );
                        })
                    );
                    return function (t, n) {
                        return e.apply(this, arguments);
                    };
                })(),
                o = v(n(8)),
                u = v(n(53)),
                d = n(102),
                s = v(n(101)),
                c = v(n(15)),
                f = n(276),
                m = v(n(17)),
                p = v(n(18));
            n(79);
            function v(e) {
                return e && e.__esModule ? e : { default: e };
            }
            var g = "upload";
            t.default = function (e, t) {
                var n = (0, p.default)(e.locale, g),
                    a = t.getResource;
                return {
                    id: g,
                    icon: { svg: m.default.fileUpload },
                    label: n,
                    shouldBeAvailable: function (e) {
                        var t = a();
                        return !(!t || !t.capabilities) && t.capabilities.canAddChildren;
                    },
                    availableInContexts: ["files-view", "new-button"],
                    handler: function () {
                        return l(e, t);
                    },
                };
            };
        },
        276: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.readLocalFile = void 0);
            var a = l(n(3)),
                i = l(n(4)),
                r = (function () {
                    var e = (0, i.default)(
                        a.default.mark(function e() {
                            return a.default.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    "return",
                                                    new Promise(function (e, t) {
                                                        var n = document.createElement("input");
                                                        n.addEventListener("change", function (t) {
                                                            var a = n.files[0];
                                                            e({ type: a.type, name: a.name, file: a });
                                                        }),
                                                            (n.style.visibility = "hidden"),
                                                            (n.type = "file"),
                                                            document.body.appendChild(n),
                                                            n.click(),
                                                            document.body.removeChild(n);
                                                    })
                                                );
                                            case 1:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                this
                            );
                        })
                    );
                    return function () {
                        return e.apply(this, arguments);
                    };
                })();
            function l(e) {
                return e && e.__esModule ? e : { default: e };
            }
            t.readLocalFile = r;
        },
        277: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = s(n(3)),
                i = s(n(4)),
                r = s(n(8)),
                l = s(n(80)),
                o = s(n(15)),
                u = s(n(17)),
                d = s(n(18));
            function s(e) {
                return e && e.__esModule ? e : { default: e };
            }
            var c = "rename";
            t.default = function (e, t) {
                var n = (0, d.default)(e.locale, c),
                    s = t.getSelectedResources;
                return {
                    id: c,
                    icon: { svg: u.default.rename },
                    label: n,
                    shouldBeAvailable: function (e) {
                        var t = s();
                        return (
                            1 === t.length &&
                            t.every(function (e) {
                                return e.capabilities.canRename;
                            })
                        );
                    },
                    availableInContexts: ["row", "toolbar"],
                    handler: function () {
                        return (function (e, t) {
                            var n = this,
                                u = t.showDialog,
                                s = t.hideDialog,
                                f = t.navigateToDir,
                                m = t.updateNotifications,
                                p = t.getSelectedResources,
                                v = t.getResource,
                                g = t.getNotifications,
                                h = d.default.bind(null, e.locale),
                                b = h(c);
                            u({
                                elementType: "SetNameDialog",
                                elementProps: {
                                    initialValue: p()[0].name,
                                    onHide: s,
                                    onSubmit: (function () {
                                        var t = (0, i.default)(
                                            a.default.mark(function t(i) {
                                                var l, u, d;
                                                return a.default.wrap(
                                                    function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return (l = p()), (t.prev = 1), (t.next = 4), r.default.getChildrenForId(e, { id: l[0].parentId });
                                                                case 4:
                                                                    if (
                                                                        !t.sent.some(function (e) {
                                                                            return e.name === i;
                                                                        })
                                                                    ) {
                                                                        t.next = 10;
                                                                        break;
                                                                    }
                                                                    return t.abrupt("return", h("fileExist", { name: i }));
                                                                case 10:
                                                                    return s(), (t.next = 13), r.default.renameResource(e, l[0].id, i);
                                                                case 13:
                                                                    (u = t.sent), (d = v()), f(d.id, u, !1);
                                                                case 16:
                                                                    return t.abrupt("return", null);
                                                                case 19:
                                                                    return (
                                                                        (t.prev = 19),
                                                                        (t.t0 = t.catch(1)),
                                                                        s(),
                                                                        (0, o.default)({ getNotifications: g, label: b, notificationId: c, updateNotifications: m }),
                                                                        console.log(t.t0),
                                                                        t.abrupt("return", null)
                                                                    );
                                                                case 25:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    n,
                                                    [[1, 19]]
                                                );
                                            })
                                        );
                                        return function (e) {
                                            return t.apply(this, arguments);
                                        };
                                    })(),
                                    onValidate: (function () {
                                        var e = (0, i.default)(
                                            a.default.mark(function e(t) {
                                                return a.default.wrap(
                                                    function (e) {
                                                        for (;;)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    if (t) {
                                                                        e.next = 4;
                                                                        break;
                                                                    }
                                                                    return e.abrupt("return", h("emptyName"));
                                                                case 4:
                                                                    if (!(t.length >= 255)) {
                                                                        e.next = 8;
                                                                        break;
                                                                    }
                                                                    return e.abrupt("return", h("tooLongFolderName"));
                                                                case 8:
                                                                    if (t.trim() === (0, l.default)(t.trim())) {
                                                                        e.next = 10;
                                                                        break;
                                                                    }
                                                                    return e.abrupt("return", h("folderNameNotAllowedCharacters"));
                                                                case 10:
                                                                    return e.abrupt("return", null);
                                                                case 11:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    },
                                                    e,
                                                    n
                                                );
                                            })
                                        );
                                        return function (t) {
                                            return e.apply(this, arguments);
                                        };
                                    })(),
                                    inputLabelText: h("newName"),
                                    headerText: h("rename"),
                                    submitButtonText: b,
                                    cancelButtonText: h("cancel"),
                                },
                            });
                        })(e, t);
                    },
                };
            };
        },
        278: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = o(n(3)),
                i = o(n(4)),
                r = o(n(8)),
                l = o(n(15));
            function o(e) {
                return e && e.__esModule ? e : { default: e };
            }
            t.default = function (e, t) {
                var n = t.updateNotifications,
                    o = t.getResource,
                    u = t.getNotifications;
                t.getSortState;
                return {
                    id: "sort",
                    shouldBeAvailable: function () {
                        return !0;
                    },
                    handler: (function () {
                        var t = (0, i.default)(
                            a.default.mark(function t(i) {
                                var d,
                                    s = i.sortBy,
                                    c = i.sortDirection;
                                return a.default.wrap(
                                    function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (d = o().id), (t.prev = 1), t.abrupt("return", r.default.getChildrenForId(e, { id: d, sortBy: s, sortDirection: c }));
                                                case 5:
                                                    return (t.prev = 5), (t.t0 = t.catch(1)), (0, l.default)({ getNotifications: u, notificationId: "rename", updateNotifications: n }), t.abrupt("return", null);
                                                case 9:
                                                case "end":
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    void 0,
                                    [[1, 5]]
                                );
                            })
                        );
                        return function (e) {
                            return t.apply(this, arguments);
                        };
                    })(),
                };
            };
        },
        279: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = o(n(30)),
                i = o(n(280)),
                r = o(n(281)),
                l = o(n(18));
            function o(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function u(e, t) {
                var n = t.cellData;
                t.columnData, t.columnIndex, t.dataKey, t.isScrolling, t.rowData, t.rowIndex;
                return "undefined" !== typeof n && e.humanReadableSize ? (0, r.default)(n) : n || "\u2014";
            }
            function d(e, t) {
                var n = t.cellData;
                t.columnData, t.columnIndex, t.dataKey, t.isScrolling, t.rowData, t.rowIndex;
                if (n) {
                    var a = e.dateTimePattern;
                    return i.default.format(new Date().setTime(n), a);
                }
                return "";
            }
            t.default = function (e) {
                var t = l.default.bind(null, e.locale);
                return [
                    {
                        elementType: "Column",
                        elementProps: {
                            key: "name",
                            dataKey: "name",
                            width: 48,
                            label: t("title"),
                            flexGrow: 1,
                            cellRenderer: { elementType: "NameCell", callArguments: [e] },
                            headerRenderer: { elementType: "HeaderCell", callArguments: [e] },
                            disableSort: !1,
                        },
                    },
                    {
                        elementType: "Column",
                        elementProps: {
                            key: "size",
                            width: 100,
                            dataKey: "size",
                            label: t("fileSize"),
                            flexGrow: e.width > 1024 ? 1 : 0,
                            cellRenderer: { elementType: "Cell", callArguments: [(0, a.default)({}, e, { getData: u })] },
                            headerRenderer: { elementType: "HeaderCell", callArguments: [e] },
                            disableSort: !0,
                        },
                    },
                    e.width > 640 && {
                        elementType: "Column",
                        elementProps: {
                            key: "modifiedTime",
                            width: 100,
                            dataKey: "modifiedTime",
                            label: t("lastModified"),
                            flexGrow: 1,
                            cellRenderer: { elementType: "Cell", callArguments: [(0, a.default)({}, e, { getData: d })] },
                            headerRenderer: { elementType: "HeaderCell", callArguments: [e] },
                            disableSort: !1,
                        },
                    },
                ];
            };
        },
        282: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = n(102);
            t.default = { locale: "en", initialSortBy: "name", initialSortDirection: "ASC", dateTimePattern: "YYYY-MM-DD HH:mm:ss", humanReadableSize: !0, getIcon: a.getIcon };
        },
        284: function (e, t, n) {
            "use strict";
            n.r(t);
            var a = n(7),
                i = n(11),
                r = n.n(i),
                l = n(61),
                o = n.n(l),
                u = (n(112), n(63)),
                d = n(103),
                s = n(104),
                c = n(40),
                f = n(106),
                m = n(105),
                p = (n(113), n(62)),
                v = n(19),
                g = n.n(v),
                h = n(283),
                b = (function (e) {
                    Object(f.a)(n, e);
                    var t = Object(m.a)(n);
                    function n(e) {
                        var i;
                        return (
                            Object(d.a)(this, n),
                            ((i = t.call(this, e)).render = function () {
                                var e = Object(u.a)(Object(u.a)({}, g.a.apiOptions), {}, { apiRoot: "/" }),
                                    t = "Loading...";
                                return (
                                    i.state.isReady &&
                                        (t = Object(a.jsx)("div", {
                                            style: { height: "480px" },
                                            children: Object(a.jsx)(p.FileManager, {
                                                children: Object(a.jsx)(p.FileNavigator, {
                                                    id: "filemanager-1",
                                                    api: g.a.api,
                                                    apiOptions: e,
                                                    capabilities: g.a.capabilities,
                                                    listViewLayout: g.a.listViewLayout,
                                                    viewLayoutOptions: g.a.viewLayoutOptions,
                                                }),
                                            }),
                                        })),
                                    Object(a.jsx)("div", { className: "App", children: t })
                                );
                            }),
                            (i.state = { isReady: !1 }),
                            h.install(window),
                            (i.componentDidMount = i.componentDidMount.bind(Object(c.a)(i))),
                            i
                        );
                    }
                    return (
                        Object(s.a)(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this;
                                    h.configure({ fs: "AsyncMirror", options: { sync: { fs: "InMemory" }, async: { fs: "IndexedDB", options: { storeName: "/home/web_user" } } } }, function (t) {
                                        if (t) throw t;
                                        e.setState({ isReady: !0 }), (window.fs = window.require("fs"));
                                    });
                                },
                            },
                        ]),
                        n
                    );
                })(i.Component);
            o.a.render(Object(a.jsx)(r.a.StrictMode, { children: Object(a.jsx)(b, {}) }), document.getElementById("root"));
        },
        53: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = o(n(30)),
                i = o(n(170)),
                r = o(n(92)),
                l = o(n(266));
            function o(e) {
                return e && e.__esModule ? e : { default: e };
            }
            t.default = {
                addNotification: function (e, t, n) {
                    return -1 !==
                        (0, r.default)(e, function (e) {
                            return e.id === t;
                        })
                        ? (console.error("Can't add notification: " + t + " already exists"), e)
                        : e.concat([(0, a.default)({ id: t, children: n.children || [] }, n)]);
                },
                updateNotification: function (e, t, n) {
                    return e.map(function (e) {
                        return e.id !== t ? e : (0, i.default)({}, e, n);
                    });
                },
                removeNotification: function (e, t) {
                    return e.filter(function (e) {
                        return e.id !== t;
                    });
                },
                getNotification: function (e, t) {
                    return (0, l.default)(e, function (e) {
                        return e.id === t;
                    });
                },
                addChild: function (e, t, n) {
                    return e.concat([{ id: t, element: n }]);
                },
                removeChild: function (e, t) {
                    return e.filter(function (e) {
                        return e.id !== t;
                    });
                },
                updateChild: function (e, t, n) {
                    return e.map(function (e) {
                        return e.id !== t ? e : (0, i.default)({}, e, (0, a.default)({ id: t }, n));
                    });
                },
                getChild: function (e, t) {
                    return (0, l.default)(e, function (e) {
                        return e.id === t;
                    });
                },
            };
        },
        79: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.normalizeStats = function (e, t) {
                    if (e && t) {
                        var n = null,
                            a = {};
                        e.isDirectory()
                            ? ((n = "dir"), (a = { canAddChildren: !0, canCopy: !0, canDelete: !0, canDownload: !1, canEdit: !1, canListChildren: !0, canRemoveChildren: !0, canRename: !0 }))
                            : e.isFile()
                            ? ((n = "file"), (a = { canAddChildren: !1, canCopy: !0, canDelete: !0, canDownload: !0, canEdit: !0, canListChildren: !1, canRemoveChildren: !1, canRename: !0 }))
                            : e.isSymbolicLink() && (n = "symlink");
                        var i = t;
                        i.length > 1 && (i = i.split("/").pop());
                        for (var r = [], l = t.substr(0, t.lastIndexOf("/")); l.length > 0 && (r.push({ id: l, name: l.split("/").pop() }), !((l = l.substr(0, l.lastIndexOf("/"))).lastIndexOf("/") < 0)); );
                        return (
                            t.length > 1 && 0 == l.length && r.push({ id: "/", name: "/" }),
                            { capabilities: a, createdTime: e.ctime, id: t, modifiedTime: e.mtime, name: i, type: n, size: e.size, parentId: t.substr(0, t.lastIndexOf("/") + 1), ancestors: r.reverse() }
                        );
                    }
                    return {};
                });
        },
        8: function (e, t, n) {
            "use strict";
            (function (e) {
                Object.defineProperty(t, "__esModule", { value: !0 });
                var a = d(n(3)),
                    i = d(n(4)),
                    r = (function () {
                        var e = (0, i.default)(
                            a.default.mark(function e(t) {
                                t.apiOptions;
                                var n,
                                    i = t.parentId,
                                    r = t.file,
                                    l = t.onProgress;
                                return a.default.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.next = 2), m(i, r);
                                                case 2:
                                                    return (n = e.sent), l(100), e.abrupt("return", (0, o.normalizeStats)(fs.statSync(n), n));
                                                case 5:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    this
                                );
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })(),
                    l = (function () {
                        var e = (0, i.default)(
                            a.default.mark(function e(t) {
                                var n,
                                    i,
                                    r = t.apiOptions,
                                    l = t.resources;
                                t.onProgress;
                                return a.default.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (1 !== l.length) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    return e.abrupt("return", { direct: !1, file: fs.readFileSync(l[0].id), fileName: l[0].name });
                                                case 2:
                                                    return (
                                                        (n = new u.default()),
                                                        l.forEach(function (e) {
                                                            return n.file(e.name, fs.readFileSync(e.id));
                                                        }),
                                                        (e.next = 6),
                                                        n.generateAsync({ type: "blob" })
                                                    );
                                                case 6:
                                                    return (i = e.sent), e.abrupt("return", { direct: !1, file: i, fileName: r.archiveName || "archive.zip" });
                                                case 8:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    this
                                );
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })(),
                    o = (n(152), n(79)),
                    u = d(n(154));
                function d(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                n(157);
                function s(e, t) {
                    return ("" !== t && void 0 !== t) || (t = "/"), (0, o.normalizeStats)(fs.statSync(t), t);
                }
                function c(e, t) {
                    var n = t.id;
                    t.sortBy, t.sortDirection;
                    if (("" === n && (n = "/"), !fs.statSync(n).isDirectory())) return [];
                    var a = fs.readdirSync(n).sort(),
                        i = [];
                    "/" !== n[n.length - 1] && (n += "/");
                    for (var r = 0; r < a.length; r++) i.push(s(0, n + a[r]));
                    return i;
                }
                function f(e, t, n) {
                    for (var a = c(0, { id: t }), i = 0; i < a.length; i++) {
                        var r = a[i];
                        if (r.name === n[0]) return 1 === n.length ? r.id : f(e, r.id, n.slice(1));
                    }
                    return null;
                }
                function m(t, n) {
                    return new Promise(function (a) {
                        var i = new FileReader();
                        (i.onload = function () {
                            var r = t + "/" + n.name;
                            fs.writeFileSync(r, e.from(i.result), { encoding: null }), a(r);
                        }),
                            i.readAsArrayBuffer(n.file);
                    });
                }
                t.default = {
                    init: function () {
                        return { apiInitialized: !0, apiSignedIn: !0 };
                    },
                    hasSignedIn: function () {
                        return !0;
                    },
                    getIdForPath: function (e, t) {
                        var n = (0, o.normalizeStats)(fs.statSync("/")),
                            a = t.split("/");
                        return 0 === a.length || 1 === a.length || "" !== a[0] ? null : 2 === a.length && "" === a[1] ? n.id : f(e, n.id, a.slice(1));
                    },
                    getResourceById: s,
                    getCapabilitiesForResource: function (e, t) {
                        return t.capabilities || [];
                    },
                    getChildrenForId: c,
                    getParentsForId: function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        if (!t) return n;
                        var a = s(0, t);
                        return a && a.ancestors ? a.ancestors : n;
                    },
                    getParentIdForResource: function (e, t) {
                        return t.parentId;
                    },
                    getResourceName: function (e, t) {
                        return t.name;
                    },
                    createFolder: function (e, t, n) {
                        var a = t + "/" + n;
                        return fs.mkdirSync(a), a;
                    },
                    downloadResources: l,
                    renameResource: function (e, t, n) {
                        var a = t.substr(0, t.lastIndexOf("/") + 1) + n;
                        return fs.renameSync(t, a), !0;
                    },
                    removeResources: function (e, t) {
                        return Promise.all(
                            t.map(function (e) {
                                return (function (e, t) {
                                    "dir" === t.type ? fs.rmdirSync(t.id) : fs.unlinkSync(t.id);
                                })(0, e);
                            })
                        );
                    },
                    uploadFileToId: r,
                };
            }.call(this, n(42).Buffer));
        },
    },
    [[284, 1, 2]],
]);
