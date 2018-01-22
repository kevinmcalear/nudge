// Non-domains
var notInChrome = "$notInChrome";
var chromeOrTabIdle = "$chromeOrTabIdle";
var allDomains = "$allDomains";

// Quick access to settings
var settingsLocal = {};

// Default domain info
var defaultDomainInfo = {
  nudge: true,
  off: false,
  offByDefault: false
};

// Default domains
var defaultDomains = [
  "messenger.com",
  "facebook.com",
  "twitter.com",
  "linkedin.com",
  "reddit.com",
  "buzzfeed.com",
  "youtube.com",
  "mail.google.com",
  "gmail.com",
  "ladbible.com",
  "news.ycombinator.com",
  "instagram.com",
  "pinterest.com",
  "theguardian.com",
  "bbc.co.uk/news",
  "tinder.com",
  "theguardian.co.uk",
  "dailymail.co.uk",
  "iwastesomuchtime.com",
  "nytimes.com",
  "breitbart.com",
  "wsj.com",
  "usatoday.com",
  "vox.com",
  "foxnews.com",
  "cnn.com",
  "huffingtonpost.com",
  "mailonline.com",
  "imgur.com",
  "tumblr.com",
  "thesportbible.com",
  "telegraph.co.uk"
];

// Default non-domain settings
var defaultSettings = {
  scroll: 5,
  time: 5,
  compulsive: 5,
  fb_profile_ratio: false,
  fb_show_unfollow: true,
  fb_auto_unfollow: false,
  fb_grey: true,
  fb_hide_notifications: true,
  show_off_switch: true,
  div_hider: false,
  constantise: true,
  share_data: true,
  compulsive_off: true,
  reshow_time: false,
  has_unfollowed: false,
  show_intro: 0,
  share_data: true
};

// Other constants
var minSec = 60;
var sendFailLimit = 10;

var unfollow = {
  listUrl:
    "https://www.facebook.com/feed_preferences/profile_list_more/?card_type=unfollow&filter=all&page=",
  actionUrl: "https://www.facebook.com/ajax/follow/unfollow_profile.php",
  profiles: [],
  executedProfiles: [],
  totalProfiles: false,
  messages: {
    loaded: "Unfollow everything",
    empty: "No profiles to unfollow",
    start: "Trying to unfollow ",
    success: "Successfully unfollowed ",
    fail: "Couldn't unfollow "
  },
  profileRequestCounter: 0,
  profileCounter: 0,
  safetyLock: 100000,
  continueRequest: true,
  timeStarted: false,
  verifText: {
    start: 'Arbiter.inform("UnfollowUser", {"profile_id":',
    end: "});"
  }
};

var refollow = {
  listUrl:
    "https://www.facebook.com/feed_preferences/profile_list_more/?card_type=refollow&filter=all&page=",
  actionUrl: "https://www.facebook.com/ajax/follow/follow_profile.php?dpr=1",
  profiles: [],
  executedProfiles: [],
  totalProfiles: false,
  messages: {
    loaded: "Ready to refollow ",
    empty: "No profiles to refollow",
    start: "Trying to refollow ",
    success: "Successfully refollowed ",
    fail: "Couldn't refollow "
  },
  profileRequestCounter: 0,
  profileCounter: 0,
  safetyLock: 100000,
  continueRequest: true,
  timeStarted: false,
  verifText: {
    start: 'Arbiter.inform("FollowUser", {"profile_id":',
    end: "});"
  }
};

// Store info in localStorage status
var tempStorage = {};
