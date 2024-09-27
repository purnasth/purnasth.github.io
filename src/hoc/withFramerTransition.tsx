import { ComponentType } from "react";
import { motion } from "framer-motion";

const withFramerTransition = (OgComponent: ComponentType) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default withFramerTransition;


// import { ComponentType } from "react";
// import { motion } from "framer-motion";
// import { useLocation } from "react-router-dom";

// const withFramerTransition = (Component: ComponentType) => {
//   return (props: any) => {
//     const location = useLocation();

//     // Define the transition effect for each variant
//     const transition = { duration: 0.75, ease: "easeInOut" };

//     // Subtle, professional transition with opacity and slight vertical movement
//     const transitionEffect = {
//       initial: { opacity: 0, y: 20, transition },
//       animate: { opacity: 1, y: 0, transition },
//       exit: { opacity: 0, y: 20, transition },
//     };

//     return (
//       <motion.div
//         key={location.pathname} // Unique key for each route change
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         variants={transitionEffect} // Assign the entire variants object here
//       >
//         <Component {...props} />
//       </motion.div>
//     );
//   };
// };

// export default withFramerTransition;
