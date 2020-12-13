import React, {Component} from "react";
import HeroHeaderGuest from "../../../components/HeroHeaderGuest";
import "./css/style.css";
import CarouselMovie from "../../../components/CarouselMovie";
import {actNowPlaying5MovieAPI} from "./modules/actions";
import MovieCard from "../../../components/MovieCard";
import {connect} from "react-redux";
import Loader from "../../../components/Loader";
import FooterGuest from "../../../components/FooterGuest";
import BannerCarousel from "../../../components/BannerCarousel";


class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    //Get data from props
    componentDidMount() {
        this.props.nowPlayingListAPI();
    }

    //TODO: render component CarouselMovie => goi component => trong component nay, nhan ve nowPlayingList roi map, moi lan map goi MovieCard
    renderCarousel = () => {
        const nowPlayingList = this.props.nowPlayingList;
        return <CarouselMovie itemsToShow={nowPlayingList} />
    }

    renderMovieCard = () => {
        const nowPlayingList = this.props.nowPlayingList;
        console.log("I am function to render component MovieCard. My props now is::")
        console.log(nowPlayingList);
        //check if the data is loaded ?
        if (nowPlayingList && nowPlayingList.length > 0) {
            console.log("DATA IS LOADED!")
            return nowPlayingList.map((movieObj) => {

                return <MovieCard movieObj={movieObj}   />;
            });
        }
    };

    render() {
        console.log("HomePage render is called.")
        const {loading} = this.props;

        if (loading) {
            console.log("Page is loading. (Loading = true)")
            return <Loader />
        }
        return (
            <div>

                <BannerCarousel />
                {/* ========== 2- COMPONENT Carousel ========== */}
                <div className="now-playing">
                    <div className="container my-4">
                        <h3>Now Playing</h3>
                        {this.renderCarousel()}
                    </div>
                </div>
                {/* ========== End COMPONENT Carousel ========== */}

                {/* ========== 4- COMPONENT Carousel: Trending ========== */}
                <div className="now-playing-2">
                    <div className="container my-4">
                        <h3>trending</h3>
                        {/*Carousel Wrapper*/}
                        <div
                            id="multi-item-example"
                            className="carousel slide carousel-multi-item"
                            data-ride="carousel"
                        >
                            {/*Controls*/}
                            <div className="controls-top">
                                <a
                                    className="btn-floating"
                                    href="#multi-item-example"
                                    data-slide="prev"
                                >
                                    <i className="fa fa-chevron-left"/>
                                </a>
                                <a
                                    className="btn-floating"
                                    href="#multi-item-example"
                                    data-slide="next"
                                >
                                    <i className="fa fa-chevron-right"/>
                                </a>
                            </div>
                            {/*/.Controls*/}
                            {/*Indicators*/}
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#multi-item-example"
                                    data-slide-to={0}
                                    className="active"
                                />
                                <li data-target="#multi-item-example" data-slide-to={1}/>
                                <li data-target="#multi-item-example" data-slide-to={2}/>
                            </ol>
                            {/*/.Indicators*/}
                            {/*Slides*/}
                            <div className="carousel-inner" role="listbox">
                                {/*First slide*/}
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2020/10/rayalastdragonposter1joblo_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Trailer</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2020/07/radioactive-poster_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2019/08/The-Kill-Team-poster_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*/.First slide*/}
                                {/*Second slide*/}
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2019/10/litlejoeposter913_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2020/10/memories-murder-review-poster_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Trailer</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2020/01/emma-poster_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*/.Second slide*/}
                                {/*Third slide*/}
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2020/02/black_widow_ver8_xlg_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2020/05/The_King_of_Staten_Island_thumb.jpeg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2020/01/timmy-failure-poster_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*/.Third slide*/}
                            </div>
                            {/*/.Slides*/}
                        </div>
                        {/*/.Carousel Wrapper*/}
                    </div>
                </div>
                {/* ========== 4 - End COMPONENT Carousel: Trending ========== */}

                {/* ========== 5- Genres ========== */}
                <div className="genre container">
                    <div className="genre__content">
                        <a className="btn-genre" href="#" role="button">
                            sci-fi
                        </a>
                        <a className="btn-genre" href="#" role="button">
                            romance
                        </a>
                        <a className="btn-genre" href="#" role="button">
                            comedy
                        </a>
                        <a className="btn-genre" href="#" role="button">
                            horror
                        </a>
                        <a className="btn-genre" href="#" role="button">
                            action
                        </a>
                    </div>
                </div>

                {/* ========== 5- End Genres  ========== */}

                {/* ========== 6- Cinema  ========== */}

                <div className="now-playing">
                    <div className="container my-4">
                        <h3>trending</h3>
                        {/*Carousel Wrapper*/}
                        <div
                            id="multi-item-example"
                            className="carousel slide carousel-multi-item"
                            data-ride="carousel"
                        >
                            {/*Controls*/}
                            <div className="controls-top">
                                <a
                                    className="btn-floating"
                                    href="#multi-item-example"
                                    data-slide="prev"
                                >
                                    <i className="fa fa-chevron-left"/>
                                </a>
                                <a
                                    className="btn-floating"
                                    href="#multi-item-example"
                                    data-slide="next"
                                >
                                    <i className="fa fa-chevron-right"/>
                                </a>
                            </div>
                            {/*/.Controls*/}
                            {/*Indicators*/}
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#multi-item-example"
                                    data-slide-to={0}
                                    className="active"
                                />
                                <li data-target="#multi-item-example" data-slide-to={1}/>
                                <li data-target="#multi-item-example" data-slide-to={2}/>
                            </ol>
                            {/*/.Indicators*/}
                            {/*Slides*/}
                            <div className="carousel-inner" role="listbox">
                                {/*First slide*/}
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2020/10/rayalastdragonposter1joblo_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Trailer</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2020/07/radioactive-poster_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2019/08/The-Kill-Team-poster_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*/.First slide*/}
                                {/*Second slide*/}
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2019/10/litlejoeposter913_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2020/10/memories-murder-review-poster_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Trailer</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2020/01/emma-poster_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*/.Second slide*/}
                                {/*Third slide*/}
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2020/02/black_widow_ver8_xlg_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2020/05/The_King_of_Staten_Island_thumb.jpeg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="card mb-2">
                                                <img
                                                    className="card-img-top"
                                                    src="https://www.joblo.com/assets/images/joblo/posters/2020/01/timmy-failure-poster_thumb.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="card-body">
                                                    <a className="btn btn-primary">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*/.Third slide*/}
                            </div>
                            {/*/.Slides*/}
                        </div>
                        {/*/.Carousel Wrapper*/}
                    </div>
                </div>

                {/* ========== 6- End Cinema  ========== */}

                {/* ========== 7- Coming soon ========== */}

                {/* ========== 7- Coming soon  ========== */}

                {/* ========== 8- Services ========== */}

                {/* ========== 8- Services  ========== */}

                <FooterGuest/>
            </div>
        );
    }


} //end of class

const mapStateToProps = (state) => {
    return {
        loading: state.listNowPlayingReducer.loading,
        nowPlayingList: state.listNowPlayingReducer.data,
    };
};

//Get data from store via props
const mapDispatchToProps = (dispatch) => {
    return {
        nowPlayingListAPI: () => {
            dispatch(actNowPlaying5MovieAPI());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);