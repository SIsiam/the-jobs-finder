export const getStaticPaths = async () => {
    const res = await fetch('https://jobs-now-server.herokuapp.com/jobs');
    const data = await res.json();
    console.log(data);

    const paths = data.map(allJobs => {
        return {
            params: { _id: allJobs._id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params._id;
    const res = await fetch('https://jobs-now-server.herokuapp.com/jobs/' + id);
    const data = await res.json();


    return {
        props: { allJobs: data }
    }

}

import Image from "next/image";
import Button from '@material-ui/core/Button';
import map from "../../Images/map.jpg";


const DetailsPage = ({ allJobs }) => {
    console.log(allJobs);
    const { name, imageURL, placeName, shortDescription, lastDescription, middleDescription } = allJobs
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <Image
                        src={imageURL}
                        alt="Picture of the author"
                        width={300}
                        height={300}
                    />
                    <h4>{placeName}</h4>
                    <Button size="large" color="primary">Apply Now</Button>
                    <hr />
                    <div className="">
                        <h4>{placeName}</h4>
                        <p>Follow us to get job updates!</p>
                        <Button size="large" color="primary">Follow Company</Button>
                        <Button size="large" color="primary">View Company</Button>

                    </div>
                </div>

                <div className="col-md-9">
                    <h1>{name} </h1>

                    <div className="">
                        <p>{shortDescription}</p>
                    </div>
                    <div className="">
                        <p>{middleDescription}</p>
                    </div>
                    <div className="">
                        <p>{lastDescription}</p>
                    </div>
                    <div className="">
                        <h2>Where to find us</h2>
                        <Image
                            src={map}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DetailsPage;