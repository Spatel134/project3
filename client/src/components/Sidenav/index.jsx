import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import KitchenIcon from "@material-ui/icons/Kitchen";
import ContactsIcon from "@material-ui/icons/Contacts";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import SupervisorAccountRoundedIcon from "@material-ui/icons/SupervisorAccountRounded";
import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WhatshotTwoToneIcon from "@material-ui/icons/WhatshotTwoTone";
import { blue } from "@material-ui/core/colors";
import Link from "@material-ui/core/Link";

export default function SideNav() {
  const [navOpen, setNavOpen] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setNavOpen({ ...navOpen, [anchor]: open });
  };

  return (
    <div>
      {/* <nav></nav> */}
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <KitchenIcon style={{ fontSize: 55 }} />
        </Button>
        <Drawer
          anchor={"left"}
          open={navOpen["left"]}
          onClose={toggleDrawer("left", false)}
        >
          <div>
            <div className="background">
              <img
                src="https://i.imgur.com/OqH4GUk.jpg"
                width="215"
                height="35"
                alt="Sidebar Background Image"
              />
            </div>
            <List>
              {/* <Link href={`/admin/${admin._id}`}> */}
              <ListItem button key={"Account_Img"}>
                <ListItemIcon>
                  {
                    <AccountCircleIcon
                      style={{ fontSize: 70, color: blue[500] }}
                    />
                  }
                </ListItemIcon>
                {/* <ListItemText primary={"Home"} /> */}
              </ListItem>
              {/* </Link> */}
            </List>
            <List>
              <Link href="/">
                <ListItem button key={"Home"}>
                  <ListItemIcon>
                    {<HomeOutlinedIcon style={{ color: blue[500] }} />}
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>

              <Link href="/locations">
                <ListItem button key={"View Locations"}>
                  <ListItemIcon>
                    {<LocationOnTwoToneIcon style={{ color: blue[500] }} />}
                  </ListItemIcon>
                  <ListItemText primary={"View Locations"} />
                </ListItem>
              </Link>

              <Link href="/resources">
                <ListItem button key={"Resources"}>
                  <ListItemIcon>
                    {<WhatshotTwoToneIcon style={{ color: blue[500] }} />}
                  </ListItemIcon>
                  <ListItemText primary={"Resources"} />
                </ListItem>
              </Link>

              <Link href="/contact">
                <ListItem button key={"Contact"}>
                  <ListItemIcon>
                    {<ContactsIcon style={{ color: blue[500] }} />}
                  </ListItemIcon>
                  <ListItemText primary={"Contact"} />
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemText primary={"Authorized User's Only"} />
              </ListItem>

              <Link href="/login">
                <ListItem button key={"Admin"}>
                  <ListItemIcon>
                    {
                      <SupervisorAccountRoundedIcon
                        style={{ color: blue[500] }}
                      />
                    }
                  </ListItemIcon>
                  <ListItemText primary={"Admin"} />
                </ListItem>
              </Link>

              {/* <Link href="/items">
                  <ListItem button key={"Add Items"}>
                    <ListItemIcon>
                      {
                        <AddCircleOutlineSharpIcon
                          style={{ color: blue[500] }}
                        />
                      }
                    </ListItemIcon>
                    <ListItemText primary={"Add Items"} />
                  </ListItem>
                </Link> */}
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
