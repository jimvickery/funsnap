# FunSnap Front End Capstone

1. Clone Project
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

5. Login then start submitting posts with images and messages


The site can be seen live at www.sillysnap.com