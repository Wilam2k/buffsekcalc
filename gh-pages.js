var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'master',
        repo: 'https://github.com/Wilam2k/buffsekcalc.git', // Update to point to your repository  
        user: {
            name: 'William Sjostrom', // update to use your name
            email: 'willkillskills@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)