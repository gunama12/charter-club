export const Styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: 10
  },
  link: {
    marginRight: 15
  },
  badge: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
  button: {
    margin: theme.spacing.unit,
  },
});