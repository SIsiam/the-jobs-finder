export const getStaticProps = async () => {
    const res = await fetch('https://jobs-now-server.herokuapp.com/jobs');
    const data = await res.json();

    return {
        props: { job: data }
    }
}


import styles from "../../styles/jobs.module.css";
import Image from "next/image";
import Link from 'next/link';


import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 360,
    },
    media: {
        height: 360,
    },
});

const jobs = ({ job }) => {
    const classes = useStyles();

    return (
        <div className={styles.jobListCatagory}>
            <div className={styles.jobList}>
                {
                    job.map(singleJob =>
                        <div className={styles.jobCard} passHref key={singleJob._id}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <Image className={styles.cardImg} src={singleJob.imageURL} alt="Picture of the author" width={350} height={350} />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {singleJob.name}
                                            </Typography>
                                        </CardContent>
                                        <Button className="mb-3" size="large" color="primary">
                                            <Link href={'/jobs/' + singleJob._id}>View Apply</Link>
                                        </Button>
                                    </CardActionArea>
                                </Card>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default jobs;