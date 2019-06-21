workflow "Build, Test and Deploy on push" {
  on = "push"
  resolves = ["Deploy app to fly.io"]
}

action "Run only master branch" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Deploy app to Cloudflare" {
  uses = "cloudflare/serverless-action@master"
  needs = ["Run only master branch"]
  envs = {
    CLOUDFLARE_SCRIPT_NAME = "yorimoi-mochizuki-moe"
  }
  secrets = [
    "CLOUDFLARE_AUTH_EMAIL",
    "CLOUDFLARE_ZONE_ID",
    "CLOUDFLARE_ACCOUNT_ID",
  ]
}

action "Deploy app to fly.io" {
  uses = "mika-f/action-deploy-to-flyio@master"
  needs = ["Run only master branch"]
  secrets = ["FLY_ACCESS_TOKEN"]
}
