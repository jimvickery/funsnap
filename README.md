# FunSnap Front End Capstone
Built with AngularJS, Firebase, Bootstrap, Javascript.

![Alt text](funsnap.png?raw=true "Title")

![Alt text](funsnap3.png?raw=true "Title")

1. Clone the Project
2. Create FBCreds file with firebase credentials setting the search index to 
3. CD into lib folder and run npm install

4. Set Up Firebase rules with
{
  "rules": {
    ".read": "true",
    ".write": "true",
      "posts" : {
        ".indexOn": ["uid"]
      }
    
  }
}

5. Run https server by typing hs

6. Register, then start submitting images or comments.

There's a live Ruby on Rails version of this site at www.sillysnap.com. Visit the site and do a search. Or register and add comments or submit your silly humor in a snap. No humor pics or comments to submit? Just register and upvote or downvote a gallery or comment.
