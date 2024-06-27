# IndexedDB File Manager
A File Manager for IndexedDB (that is currently a Work in Progress)

Demo Site Here: https://burnedpopcorn.github.io/IndexedDB-File-Manager/filemanager.html

## Features Include:
- Ability to Upload/Download ANY file type to/from IndexedDB
- Ability to Rename Files / Folders
- Ability to Make Folders within the Page
- Ability to Delete any Files and Folders (just delete everything in the folder before the folder itself)
- Being able to see File Size and Last Modified Time

And with a pretty good UI too 

(You can see a preview by looking at the numbered pictures)
> Also I'm pretty sure this is entirely BrowserFS based

## This is NOT a File Manager to browse the root of IndexedDB
IndexedDB to my knowledge DOES NOT let you access the root of IndexedDB, as it creates 'sandboxes' for each website and you cannot access the sandbox from another website using this File Manager.
> Unless that website also has this installed, but you would have to switch over to that page

This File Manager also has the limitation of not being able to open and access prexisting 'sandboxes', even if they are from the same website (unless they have the same name). This is because BrowserFS forces the File Manager to make/merge a sandbox (the default name is ```file_sandbox```) and I'm pretty sure BrowserFS doesn't have the ability to locate and enter different ones that might be there

But either way the File Manager considers ```file_sandbox``` to be root, so unless actual IndexedDB root can be achieved, this will harm the usefulness of this project alot
> You can merge into a prexisting sandbox, but they have to be the exact same name, but you can do that in the instructions below

![image](https://github.com/burnedpopcorn/IndexedDB-File-Manager/blob/main/sandbox.png)

## To Change the SandBox Database Name
This project, as stated above, unfortunately runs in a sandbox comprised of a separate database and objects (or whatever the hell they're called), but you change the name of them by opening ```filemanager.js```, and searching for ```file_sandbox```, and replacing that string to whatever you want 
> This Project is still considered a WIP because I want to be able to name the database and object within differently, and even be able to access the IndexedDB root if possible

### Thanks to
Sappharad, for his Sonic 3 AIR Web Port that made this possible (pretty surprising huh)
> His port includes this exact File Manager, I just removed everything related to the port and isolated the bare File Manager
