import React from "react";
import "./HomeworkDay1Style.css"

const DeveloperDetails = (props) => {
    return (
        <div className="off-canvas-wrapper">
            <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

                <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
                    <div className="row column">
                        <br />
                        <img className="thumbnail" src={props.img3} />
                        <h5>{props.name}</h5>
                        <p>{props.description}</p>
                    </div>
                </div>

                <div className="off-canvas-content" data-off-canvas-content>
                    <div className="title-bar hide-for-large">
                        <div className="title-bar-left">
                            <button className="menu-icon" type="button" data-open="my-info"></button>
                            <span className="title-bar-title">Mike Mikerson</span>
                        </div>
                    </div>
                    <div className="callout primary">
                        <div className="row column">
                            <h1>Hello! This is my group.</h1>
                            <p className="lead">{props.description1}</p>
                        </div>
                    </div>
                    <div className="row small-up-2 medium-up-3 large-up-4">
                        <div className="column">
                            <img className="thumbnail" src={props.img1} />
                            <h5>{props.developer1}</h5>
                        </div>
                        <div className="column">
                            <img className="thumbnail" src={props.img1} />
                            <h5>{props.developer2}</h5>
                        </div>
                        <div className="column">
                            <img className="thumbnail" src={props.img1} />
                            <h5>{props.developer3}</h5>
                        </div>
                        <div className="column">
                            <img className="thumbnail" src={props.img1} />
                            <h5>{props.developer4}</h5>
                        </div>
                        <div className="column">
                            <img className="thumbnail" src={props.img2} />
                            <h5>{props.developer9}</h5>
                        </div>
                        <div className="column">
                            <img className="thumbnail" src={props.img2} />
                            <h5>{props.developer10}</h5>
                        </div>
                        <div className="column">
                            <img className="thumbnail" src={props.img2} />
                            <h5>{props.developer11}</h5>
                        </div>
                        <div className="column">
                            <img className="thumbnail" src={props.img2} />
                            <h5>{props.developer12}</h5>
                        </div>
                        <div className="column">
                            <img className="thumbnail" src={props.img1} />
                            <h5>{props.developer5}</h5>
                        </div>
                        <div className="column">
                            <img className="thumbnail" src={props.img1} />
                            <h5>{props.developer6}</h5>
                        </div>
                        <div className="column">
                            <img className="thumbnail" src={props.img1} />
                            <h5>{props.developer7}</h5>
                        </div>
                        <div className="column">
                            <img className="thumbnail" src={props.img1} />
                            <h5>{props.developer8}</h5>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="medium-6 columns">
                            <h3>Contact Me</h3>
                            <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
                                porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                                Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor.</p>
                            <ul className="menu">
                                <li><a href="#">Dribbble</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Yo</a></li>
                            </ul>
                        </div>
                        <div className="medium-6 columns">
                            <label>Name
                                <input type="text" placeholder="Name" />
                            </label>
                            <label>Email
                                <input type="text" placeholder="Email" />
                            </label>
                            <label>
                                Message
                                <textarea placeholder="holla at a designerd"></textarea>
                            </label>
                            <input type="submit" className="button expanded" value="Submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeveloperDetails;