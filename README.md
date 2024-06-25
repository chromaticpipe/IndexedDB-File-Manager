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
> Also I'm pretty sure this is entirely BrowserFS based

## To Change the SandBox Database Name
This project unfortunately runs in a sandbox comprised of a separate database and objects, but you change the name of them by opening ```filemanager.js```, and searching for ```file_sandbox```, and replacing that string to whatever you want 
> This Project is still considered a WIP because I want to be able to name the database and object within differently, and even be able to access the IndexedDB root if possible

### Thanks to
Sappharad, for his Sonic 3 AIR Web Port that made this possible (pretty surprising huh)
> His port includes this exact File Manager, I just removed everything related to the port and isolated the bare File Manager
