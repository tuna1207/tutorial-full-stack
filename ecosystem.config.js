module.exports = {
  apps: [{
    name: 'tutorial-full-stack',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-218-86-37.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/tutorial.pem',
      ref: 'origin/master',
      repo: 'git@github.com:tunguyenbhtech/tutorial-full-stack.git',
      path: '/home/ubuntu/tutorial-full-stack',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
