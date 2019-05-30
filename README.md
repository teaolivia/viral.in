# viral.in

# ! please only make changes in your dev branch

## File Structure
```
--api		/* our backend source */
--ref		/* media resources such as images, logo, media, documents */
--viralin	/* frontend source */
```

### How to push to master
1. Make sure you are currently in ```dev-<yourname>``` branch. If you are currently in ```master```, switch by ```git checkout dev-<yourname>```.
2. ```git add .```
3. ```git commit -m "<message>"```
4. ```git checkout master```
5. ```git pull origin master```
6. ```git checkout <branch_name>```
7. ```git rebase master```
8. ```git checkout master```
9. ```git merge <branch_name>```
10. ```git push```
