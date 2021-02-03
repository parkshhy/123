import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Psh from './psh.jpeg';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src={Psh}
                                alt="myshoumei"
                                style={{ height: '400px',borderRadius:'30px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '1' }}>박 상 현</h2>
                        <h4 style={{ color: 'black' }}>👨‍💻Programmer</h4>
                        <hr style={{ borderTop: '3px solid #174DBA', width: '80%' }} />
                        <p>안녕하십니까 <br/>저의 포트폴리오에 방문해 주셔서 감사합니다.<br/>
                            IT에 매력을 느껴 전공을 변경한 뒤 끊임없는 자기개발에 <br/>힘쓰고 있습니다.  
                            다방면에서 활약할수 있는 개발자가 되<br/> 도록 노력하겠습니다. 감사합니다.
                        </p>
                        <hr style={{ borderTop: '3px solid #174DBA', width: '50%' }} />
                        <h5>🏠Address</h5>
                        <p>서울특별시 도봉구 방학동</p>
                        <h5>📲Phone</h5>
                        <p>010-2197-1370</p>
                        <h5>📩E-mail</h5>
                        <p>rainbluebird8@gmail.com</p>
                        <hr style={{ borderTop: '3px solid #174DBA', width: '50%' }} />
                    </Cell>



                    <Cell className="resume-right-col" col={8} >
                        <h2>Education</h2>
                        <Education
                            startYear="2017.3 "
                            endYear=" 2013.2"
                            schoolName="신한대학교"
                            schoolDescription="국제관광경영학"
                        />

                        <Education
                            startYear="2016.4 "
                            endYear=" 2016.10"
                            schoolName="종로 중앙HTA"
                            schoolDescription="웹서버사이드 프로그래밍 과정"
                        />
                        <hr style={{ borderTop: '3px solid #D8EFE6' }}></hr>

                        <h2>Experience</h2>
                        <Experience
                       startYear="2008.2 "
                       endYear="2010.1"
                       jobName="해병대 연평부대"
                       jobDescription="병장 만기전역"
                   />
                     <Experience
                       startYear="2013.3 "
                       endYear=" 2015.3"
                       jobName="서울 반얀트리호텔"
                       jobDescription="하우스키핑부 근무"
                   />
                   <Experience
                       startYear="2015.4 "
                       endYear=" 2016.1"
                       jobName="일본"
                       jobDescription="일본 워킹홀리데이"
                   />
                    <Experience
                       startYear="2017.11 "
                       endYear=" 2018.4"
                       jobName="일본 NTT DOCOMO"
                       jobDescription="DOCOMO 파견 근무"
                   />
                    <Experience
                       startYear="2018.5 "
                       endYear=" 2019.5"
                       jobName="일본 DENSO"
                       jobDescription="DENSO 파견 근무"
                   />
                      <Experience
                       startYear="2019.6 "
                       endYear=" 2019.11"
                       jobName="일본 TOYOTA"
                       jobDescription=" TOYOTA 파견 근무"
                   />
                   <Experience
                       startYear="2019.12 "
                       endYear=" 2020.4"
                       jobName="일본 TOYOTA SYSTEMS"
                       jobDescription=" TOYOTA SYSTEMS 파견 근무"
                   />
                    <Experience
                       startYear="2020.5 "
                       endYear=" 2020.10"
                       jobName="일본 OPENSESAME TEC"
                       jobDescription=" OPENSESAME TEC 근무"
                   />
                   <hr style={{ borderTop: '3px solid #D8EFE6' }}></hr>


 </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;
