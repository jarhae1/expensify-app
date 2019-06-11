# expensify-app

git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits


Must create SSH keys to link to github:
https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

Look to see if you already have SSH set up:
ls -a ~/.ssh

Step 1: ssh-keygen -t rsa -b 4096 -C "realemailaddress"

Step 2: Press Enter to stick with default name

Step 3: Enter a passphrase if you want. (Don't have to)

Step4: Enter ls -a ~/.ssh to see that the ssh has been added

Step 5(When we try to communicate with another service it actually knows what ssh key to use, this command will check to make sure an SSH agent is running): user eval "$(ssh-agent -s)" to run Agent

Step 6 (Add the new key): ssh-add ~/.ssh/id_rsa

Step 7(Copy contents to clipboard by running the following code): Different for each operating system. Go here to find documentation: https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account

Step 8: Go to GitHub to Setting and find SSH and GPG keys

Step 9: Enter Title and then Control V in key area to enter the key from the clipboard

