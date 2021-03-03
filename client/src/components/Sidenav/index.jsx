// import React from "react";
// import { Link } from "react-router-dom";
// import M from "materialize-css";
// import { useState, useEffect } from "react";
// import { Button, Drawer } from "@material-ui/core";
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import { Button, Drawer } from "@material-ui/core";
// import { Phone, House } from "@material-ui/icons";

// const Sidenav = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   useEffect(() => {
//     M.AutoInit()
//   }, [])
//   return (
//     <>
//       {/* <nav> </nav> */}

//       <React.Fragment>
//         <a onClick={() => setNavOpen(true)} className="sidenav-trigger">
//           <i className=" grey-text large material-icons">kitchen</i>
//         </a>
//         <Button>Button</Button>
//         <Drawer anchor="left" open={navOpen} onClose={() => setNavOpen(false)}>
//           <a href="#user"></a>
//           <Link to="/">
//             <House />
//           </Link>
//           <Link to="/contact">
//             <Phone />
//           </Link>
//         </Drawer>
//       </React.Fragment>
//     </>
//   );
// };
// export default Sidenav;
import React from "react";
// import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
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
import WhatshotTwoToneIcon from "@material-ui/icons/WhatshotTwoTone";
import { blue } from "@material-ui/core/colors";
import Link from "@material-ui/core/Link";

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

export default function TemporaryDrawer() {
  // const classes = useStyles();
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

  // const list = () => (
  //   <div
  //     // className={clsx(classes.list, {
  //     //   [classes.fullList]: anchor === 'top' || anchor === 'bottom',
  //     // })}
  //     // role="presentation"
  //     // onClick={toggleDrawer(anchor, false)}
  //     // onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {['Home', 'View Locations', 'Resources', 'Contact'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{whatIsIt(index)}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['Authorized Users Only', 'Admin', 'Add Items'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{whatIsItAdmin(index)}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );

  // function whatIsIt(index) {
  //   if(index === 0){
  //     return <InboxIcon />;
  //   } else if(index === 1){
  //     return <ContactsIcon/>;
  //   } else if(index === 1){
  //     return <KitchenIcon/>;
  //   } else {
  //     return <MailIcon/>;
  //   }
  //   // return index === 0 ? <InboxIcon /> : <KitchenIcon />
  // }

  // function whatIsItAdmin(index) {
  //   if(index === 1){
  //     return <InboxIcon />;
  //   } else if(index === 2){
  //     return <ContactsIcon/>;
  //   } else if(index === 3){
  //     return <KitchenIcon/>;
  //   }
  //   // return index === 0 ? <InboxIcon /> : <KitchenIcon />
  // }
  // const preventDefault = (event) => event.preventDefault();

  return (
    <div>
      {/* <nav></nav> */}
      {/* {["left"].map((anchor) => ( */}
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>
            <KitchenIcon style={{ fontSize: 55 }} />
          </Button>
          <Drawer
            anchor={"left"}
            open={navOpen["left"]}
            onClose={toggleDrawer("left", false)}
          >
            <div
            // className={clsx(classes.list, {
            //   [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            // })}
            // role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
            >
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
              {/* <List><ListItem><ListItemText primary={"Authorized User's Only"} /></ListItem></List> */}
              <List>
                <ListItem>
                  <ListItemText primary={"Authorized User's Only"} />
                </ListItem>

                <Link href="/admin">
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

                <Link href="/items">
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
                </Link>
              </List>
              {/* <List>
        {['Authorized Users Only', 'Admin', 'Add Items'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{whatIsItAdmin(index)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
            </div>
          </Drawer>
        </React.Fragment>
      {/* ))} */}
    </div>
  );
}
