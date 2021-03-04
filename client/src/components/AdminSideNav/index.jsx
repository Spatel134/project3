// import React from "react";
// import { Link } from "react-router-dom";
// import M from "materialize-css";
// import { useEffect } from "react";

// const AdminSideNav = ({ admin }) => {
//   useEffect(() => {
//     M.AutoInit();
//   }, []);
//   return (
//     <>
//       <nav> </nav>

//       <ul id="slide-out" className="sidenav">
//         <li>
//           <div className="user-view">
//             <div className="background">
//               <img src="https://i.imgur.com/OqH4GUk.jpg" />
//             </div>
//             <img
//               className="circle"
//               src="https://www.clipartmax.com/png/middle/269-2691367_user-login-person-man-enter-comments-logo.png"
//             />
//             <span className="white-text">Welcome! {admin.email}</span>
//           </div>
//         </li>
//         <li>
//           <Link to={`/admin/${admin._id}`}>
//             <i className=" material-icons">home</i> Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/admin/location/view">
//             <i className=" material-icons">location_on</i> View Locations
//           </Link>
//         </li>
//         <li>
//           <Link to="/admin/location/create">
//             <i className=" material-icons">whatshot</i> Create Location
//           </Link>
//         </li>
//         <li>
//           <Link to="/admin/item/create">
//             <i className=" material-icons">add</i> Add Items
//           </Link>
//         </li>
//         <li>
//           <Link to="/admin/location/create">
//             <i className=" material-icons">edit_location</i> Manage Locations
//           </Link>
//         </li>
//         <li>
//           <Link>
//             {" "}
//             <i className=" material-icons">phonelink</i> Contact
//           </Link>
//         </li>

//         <li>
//           <div className="divider"></div>
//         </li>
//         <li>
//           <Link to="/">
//             <i className=" material-icons">account_box</i> SignOut
//           </Link>
//         </li>
//       </ul>
//       {/* <a href='html#' data-target='slide-out' className='sidenav-trigger'>
//                 <i className=' grey-text large material-icons'>kitchen</i>
//             </a> */}
//     </>
//   );
// };
// export default AdminSideNav;

import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import KitchenIcon from "@material-ui/icons/Kitchen";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SupervisorAccountRoundedIcon from "@material-ui/icons/SupervisorAccountRounded";
import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";
import WhatshotTwoToneIcon from "@material-ui/icons/WhatshotTwoTone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhonelinkIcon from '@material-ui/icons/Phonelink';
import CardMedia from "@material-ui/core/CardMedia";
import { blue } from "@material-ui/core/colors";
import Link from "@material-ui/core/Link";
import { Avatar, Card, makeStyles, Paper } from "@material-ui/core";

export default function AdminSideNav({ admin }) {
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
  //   const useStyles = makeStyles({
  //     root: {
  //       backgroundColor: "red",
  //       color: (props) => props.color,
  //     },
  //   });
  //   const classes = useStyles();
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
            {/* <div className="background">
              <img src="https://i.imgur.com/OqH4GUk.jpg" />
            </div> */}
            {/* <Card>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                width="5"
                image="https://i.imgur.com/OqH4GUk.jpg"
                title="Contemplative Reptile"
              />
            </Card> */}
            {/* <Avatar src="https://i.imgur.com/OqH4GUk.jpg"/> */}
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
              {/* <Link href={`/admin/${admin._id}`}> */}
              <ListItem button key={"Account"}>
                {/* <ListItemIcon>
                </ListItemIcon> */}
                <ListItemText primary={`Welcome! ${admin.email}`} />
              </ListItem>
              {/* </Link> */}
            </List>
            <List>
              <Link href={`/admin/${admin._id}`}>
                <ListItem button key={"Home"}>
                  <ListItemIcon>
                    {<HomeOutlinedIcon style={{ color: blue[500] }} />}
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>

              <Link href="/admin/location/view">
                <ListItem button key={"View Locations"}>
                  <ListItemIcon>
                    {<LocationOnIcon style={{ color: blue[500] }} />}
                  </ListItemIcon>
                  <ListItemText primary={"View Locations"} />
                </ListItem>
              </Link>
              {/* </List>

            <List> */}
              <Link href="/admin/location/create">
                <ListItem button key={"Create Location"}>
                  <ListItemIcon>
                    {<WhatshotTwoToneIcon style={{ color: blue[500] }} />}
                  </ListItemIcon>
                  <ListItemText primary={"Create Location"} />
                </ListItem>
              </Link>

              <Link href="/admin/item/create">
                <ListItem button key={"Add Items"}>
                  <ListItemIcon>
                    {<AddCircleOutlineSharpIcon style={{ color: blue[500] }} />}
                  </ListItemIcon>
                  <ListItemText primary={"Add Items"} />
                </ListItem>
              </Link>

              <Link href="/admin/location/create">
                <ListItem button key={"Manage Locations"}>
                  <ListItemIcon>
                    {<EditLocationIcon style={{ color: blue[500] }} />}
                  </ListItemIcon>
                  <ListItemText primary={"Manage Locations"} />
                </ListItem>
              </Link>

              <Link href="/contact">
                <ListItem button key={"Contact"}>
                  <ListItemIcon>
                    {<PhonelinkIcon style={{ color: blue[500] }} />}
                  </ListItemIcon>
                  <ListItemText primary={"Contact"} />
                </ListItem>
              </Link>

              <Link href="/">
                <ListItem button key={"SignOut"}>
                  <ListItemIcon>
                    {
                      <SupervisorAccountRoundedIcon
                        style={{ color: blue[500] }}
                      />
                    }
                  </ListItemIcon>
                  <ListItemText primary={"SignOut"} />
                </ListItem>
              </Link>
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
