import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export default function TodoItem({ todo ,FetchDetailsOfCurrentTodo}) {
    console.log(todo);
    return (
        <>
            <Card
                sx={{
                    mb: 1,
                    maxWidth: 350,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}>
                <CardContent>
                    <Typography varient='h5' color={"Text.secondary"}>
                        {todo?.todo}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() => FetchDetailsOfCurrentTodo(todo?.id)}
                        sx={{
                            backgroundColor: "#000000",
                            color: "#fff",
                            opacity: "0.75",
                            "&:hover": {
                                backgroundColor: "#000000",
                                color: "#fff",
                                opacity: "1",
                            },
                        }}
                    >
                        Details
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}