import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import SettingsIcon from "@material-ui/icons/Person";
import GroupAddIcon from "@material-ui/icons/Contacts";
import VideoLabelIcon from "@material-ui/icons/RateReview";
import StepConnector from "@material-ui/core/StepConnector";
import Typography from "@material-ui/core/Typography";
import { StepIconProps } from "@material-ui/core/StepIcon";
import PersonalDetail from "../SignupForm/PersonalDetail";
import AccountDetail from "../SignupForm/AccountDetail";
import OverView from "../SignupForm/OverView";

// const QontoConnector = withStyles({
//   alternativeLabel: {
//     top: 10,
//     left: "calc(-50% + 16px)",
//     right: "calc(50% + 16px)",
//   },
//   active: {
//     "& $line": {
//       borderColor: "#784af4",
//     },
//   },
//   completed: {
//     "& $line": {
//       borderColor: "#784af4",
//     },
//   },
//   line: {
//     borderColor: "#eaeaf0",
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// })(StepConnector);

// const useQontoStepIconStyles = makeStyles({
//   root: {
//     color: "#eaeaf0",
//     display: "flex",
//     height: 22,
//     alignItems: "center",
//   },
//   active: {
//     color: "#784af4",
//   },
//   circle: {
//     width: 8,
//     height: 8,
//     borderRadius: "50%",
//     backgroundColor: "currentColor",
//   },
//   completed: {
//     color: "#784af4",
//     zIndex: 1,
//     fontSize: 18,
//   },
// });

// function QontoStepIcon(props: StepIconProps) {
//   const classes = useQontoStepIconStyles();
//   const { active, completed } = props;

//   return (
//     <div
//       className={clsx(classes.root, {
//         [classes.active]: active,
//       })}
//     >
//       {completed ? (
//         <Check className={classes.completed} />
//       ) : (
//         <div className={classes.circle} />
//       )}
//     </div>
//   );
// }

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ["Account Detail", "Personal Detail", "OVERVIEW"];
}

function getStepContent(
  step: number,
  setActiveStep: React.Dispatch<React.SetStateAction<number>>,
  formValue: {},
  setFormValue: React.Dispatch<React.SetStateAction<{}>>
) {
  switch (step) {
    case 0:
      return (
        <PersonalDetail
          submit={setActiveStep}
          prevValue={formValue}
          setFormValue={setFormValue}
        />
      );
    case 1:
      return (
        <AccountDetail
          submit={setActiveStep}
          prevValue={formValue}
          setFormValue={setFormValue}
        />
      );
    case 2:
      return <OverView submit={setActiveStep} values={formValue} />;
    default:
      return "Unknown step";
  }
}

export default function Steppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const [formValue, setFormValue] = React.useState({});

  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            {/* <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button> */}
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(
                activeStep,
                setActiveStep,
                formValue,
                setFormValue
              )}
            </Typography>
            <div>
              {/* <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
