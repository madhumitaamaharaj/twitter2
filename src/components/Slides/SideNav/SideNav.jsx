import React from 'react'
import { useState } from 'react';
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {Avatar, Button } from "@mui/material";
import styles from "./SideNav.module.css";
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Dialog, DialogContent} from "@mui/material";




export default function SideNav() {

  const [showTweetBox, setShowTweetBox] = useState(false);
  const [tweetMessage, setTweetMessage] = useState("");
  return (
    <div>
    <p>
    <span>
    <HomeIcon />
    </span>
   Home
    </p>
    <p>
    <span>
    <TagIcon />
    </span>
    Explore
    </p>
    <p>
    <span>
    <NotificationsNoneIcon />
    </span>
    Notifications
    </p>
    <p>
    <span>
    <MailOutlineIcon/>
    </span>
    Messages
    </p>
    <p>
    <span>
    <ListAltIcon/>
    </span>
    Lists
    </p>
    <p>
    <span>
    <BookmarkBorderIcon/>
    Bookmarks
    </span>
    </p>
    <p>
    <span>
    < TwitterIcon/>
   Twitter Blue
    </span>
    
    </p>
    <p>
    <span>
    <PermIdentityIcon />
    </span>
   Profile
    </p>
    <p>
    <span>
    <MoreHorizIcon />
    </span>
    More
    </p>
    <Button
          className={styles.tweetButton}
         
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#51b6f5",
              color: "white",
              border: "none",
              fontWeight: "900",
              textTransform: "inherit",
              borderRadius: "1.875rem" ,
              height: "3.125rem" ,
              width: "15%",
              paddingLeft: "1.25rem" ,
            "&:hover": {
              backgroundColor: "#51b6f5"
            },
          }}
        >
          Tweet
        </Button>
        <div className={styles.avatar}>
          <Avatar
            alt="Neem Karoli"
            src="https://shukratal.in/wp-content/uploads/2023/02/neem-karoli.jpg"
            size="md"
          />
        </div>
        <Dialog open={showTweetBox} onClose={() => setShowTweetBox(false)}>
        <DialogContent
          sx={{
            height: "300px",
            width: "500px",
          }}
        >
         
        </DialogContent>
      </Dialog>
    </div>
    

  )
}
