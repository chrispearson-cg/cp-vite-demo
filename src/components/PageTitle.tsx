import { Typography } from "@mui/material";

const PageTitle = ({ title }: { title: string }) => {
    return <Typography variant="h2" gutterBottom>{title}</Typography>;
};

export default PageTitle;