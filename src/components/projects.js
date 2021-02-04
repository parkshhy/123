import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, IconButton, Button, CardText } from 'react-mdl';
import Port from './Portfolio.png';
import Todo from './todo.png';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    state = {
        isOpen: false
    };

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <div className="projects-grid">
                        {/*Project1*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://miro.medium.com/max/8642/1*iIXOmGDzrtTJmdwbn7cGMw.png) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                중앙HTA
                            </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                                종로 중앙HTA<br />
                               프로젝트기간 : 2016.6~2016.7<br />
                               프로젝트내용 : 도서관리시스템개발<br />
                               사용언어 : JAVA,JSP,ORCAL,HTML/CSS<br />
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*Project2*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://spring.io/images/OG-Spring.png) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                종로 중앙HTA 프로젝트
                            </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                                종로 중앙HTA<br />
                               프로젝트기간 : 2016.9~2016.10<br />
                               프로젝트내용 : 도서관리시스템개발<br />
                               사용언어 : JAVA,MYSQL,HTML/CSS,SPRING<br />
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div></div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <div className="projects-grid">
                        {/*docomo*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://www.unlockjp.com/en/wp-content/uploads/2020/01/d.jpg) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                도코모
                            </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                                근무처 : 일본 도쿄 [도코모]<br />
                               근무기간 : 2017.11~2018.4<br />
                               프로젝트업무 : 컨텐츠관리시스템(CMS)<br />
                               유지보수 테스트 업무 담당<br />
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*denso*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://www.eetasia.com/wp-content/uploads/sites/2/images/c62d7015-fde1-4934-9993-0ccf6e27e14b.png) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                덴소
                            </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                                근무처 : 일본 나고야 [덴소]<br />
                               근무기간 : 2018.5~2019.5<br />
                               프로젝트업무 : 덴소 차량통신모튤(DCM)<br />유지보수
                               테스트 업무 담당<br />
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*toyota*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(data:image/png;base64,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) center / cover'
                            }}>

                            </CardTitle>
                            <CardText>
                                토요타
                            </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                                근무처 : 일본 나고야 [토요타]<br />
                               프로젝트기간 : 2019.6~2019.11<br />
                               담담업무 : 토요타연계시스템 유지보수 <br />
                                <br />
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*Toyata systems*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://d3lckkmmuve1sw.cloudfront.net/attachments/0dfea67a48e300a717950687abd40afaa0b15517/store/c91aef7a3041e862f6beb3c2d6a743287364638ce00bfc8937c83c912db2/80208231.png) center / cover'
                            }}>

                            </CardTitle>
                            <CardText>
                                토요타시스템
                            </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                                근무처 : 일본 나고야 [토요타시스템]<br />
                               프로젝트기간 : 2019.12~2020.4<br />
                               담담업무 : 토요타 KITORA 프레임워크<br /> 유지보수 담당
                               <br />
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*React*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-dark_1200x628.png?sfvrsn=19de8226_2) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                오픈세사미 테그노롤지
                            </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                                근무처:일본 나고야 [오픈세사미테크노롤지]<br />
                               프로젝트기간 : 2019.5~2020.10<br />
                               프로젝트내용 : 자동차 운행관리시스템 개발<br />
                               담담업무 : 리액트 프론트엔트 담당 <br />
                                <br />
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div></div >
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <div className="projects-grid">

                        {/*Project1*/}

                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <img src={Port} alt="kojinProject" style={{ height: '178px' }} />
                            <CardText>
                            리액트 포트폴리오
                        </CardText>
                        <CardActions border>
                            <Button a href="https://github.com/parkshhy/123" target = "_blank">⚙️GIT HUB</Button>
                            <Button a href="https://parkshhy.github.io/123/" target = "_blank">🖥WEB PAGE</Button>
                            </CardActions>  
                        </Card>

                      {/*Project1*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                        <img src={Todo} alt="kannrisystem" style={{ height: '178px' }} />
                            <CardText>
                                리액트 스케쥴관리시스템
                        </CardText>
                     
                        <CardActions border>
                            <Button a href="https://github.com/parkshhy/todo" target = "_blank">⚙️GIT HUB</Button>
                            <Button a href="https://parkshhy.github.io/todo/" target = "_blank">🖥WEB PAGE</Button>
                        </CardActions>
                       </Card>

                        {/*Project2*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://zikto.github.io/img/react-native.png) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                            리액트 네이티브 날씨어플
                        </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                            
                        </CardActions>
                            <Button disabled="disabled" onClick={(e) => this.setState({ isOpen: true })}>is Coming soon</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div></div>
            )
        }
    }

    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab}
                    onChange={(tabId => this.setState({ activeTab: tabId }))} ripple>
                    <Tab><strong>↳기관프로젝트</strong></Tab>
                    <Tab><strong>↳실무프로젝트</strong></Tab>
                    <Tab><strong>↳개인프로젝트</strong></Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Projects;