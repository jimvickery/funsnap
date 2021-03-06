![Alt text](sillysnap_logo3.png?raw=true "Title")

# Funsnap (An Imgur Clone) 
## This is an Image Sharing Site built as the Front End Capstone at Nashville Software School. It is similar to the site Imgur. 
A live version of this site built with Ruby on Rails can be seen at www.sillysnap.com, (more info below). <br>
Built with AngularJS, Firebase, Bootstrap, Javascript, Grunt.

### Main page with all images.
![Alt text](funsnap.png?raw=true "Title")
### Show page of a gallery posting with the Most Viral Images in Right Column.
![Alt text](funsnap3.png?raw=true "Title")

====================================================================================
## Live Site Preview
====================================================================================

The AngularJS version (this repo) is not live. However, the RoR version of this site is live: www.sillysnap.com. Visit the site and do a search. Or register and add comments or submit your silly humor in a snap. No humor pics or comments to submit? Just register and upvote or downvote a gallery or comment.

### Main page with all images.

![Alt text](sillysnap_p1.png?raw=true "Title")
### Show page of a gallery posting with the Most Viral Images in Right Column.

![Alt text](sillysnap_p2.png?raw=true "Title")

## Also, there's an Admin Area. 
![Alt text](admin1.png?raw=true "Title")

## List of Categories, Comments and Users from Admin with full admin control.
![Alt text](admin2.png?raw=true "Title")
====================================================================================
## Deployment Instructions:

Note: These instructions are for the AngularJS version of the site. The Ruby on Rails version curently is a private Repo UTF.
<br><br>
```
1. Clone the Project 
```
2. Create FBCreds file with firebase credentials setting the search index to 
3. CD into lib folder and type in the terminal: 
``` 
npm install
```
4. Set Up a Firebase account and set the rules to:
```
{
"rules": {
".read": "true",
".write": "true",
"posts" : {
".indexOn": ["uid"]
}
}
}
```
5. Run https server by typing in the terminal:
``` 
hs 
```
6. Open browser and type: 
``` 
http://localhost:8080 
```
7. Register, then start submitting images or comments.


Visit the live site (built with RoR) at <a href="http://www.sillysnap.com" target="_blank">SillySnap.com</a>
to see it in action.

Note: This Repo is built with AngularJS and does not include an admin area. The admin area is only available in the RoR version which currently is a private repo.  More will be added to this repo at a later time. The administration area is only on the live site and accessible  by administrators.
