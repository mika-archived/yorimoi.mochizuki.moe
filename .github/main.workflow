workflow "Build, Test and Deploy on push" {
  on = "push"
  resolves = ["Deploy app to fly.io"]
}

action "Run only master branch" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Deploy app to fly.io" {
  uses = "mika-f/action-deploy-to-flyio@master"
  needs = ["Run only master branch"]
  secrets = ["FLY_ACCESS_TOKEN"]
}
