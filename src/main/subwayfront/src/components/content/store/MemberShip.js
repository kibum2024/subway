import React from 'react';
import 'src/components/content/store/MemberShip.css';

const MemberShip = () => {
  return (
    <div>
      <div class="inquiry_wrapper">
        <h2 class="subTitle">가맹신청ㆍ문의</h2>
        <div class="content">
          <form id="frm" method="post" name="frm">
            <div class="pd_agree_wrapper">
              <div class="pd_agree">
                <h3>개인정보수집 및 이용동의</h3>
                <div class="scroll_wrapper mCustomScrollbar _mCS_1"><div id="mCSB_1" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style={{ maxHeight: 'none' }} tabindex="0"><div id="mCSB_1_container" class="mCSB_container" style={{ position: 'relative', top: '0', left: '0' }} dir="ltr">
                  ■ 개인정보의 수집 및 이용목적<br />
                  서비스 이용에 따른 가입 의사 확인, 연령확인, 불만처리 등 민원처리, 고지사항 전달
                  (민원처리를 위해 해당 매장 및 매장 담당 지사에 성함 및 연락처가 전달될 수 있음을
                  알려드립니다.)<br /><br />

                  ■ 개인정보의 수집 항목<br />
                  이름,이메일,연락처 및 개인정보처리방침에서 명시한 자동으로 수집되는 정보<br /><br />

                  ■ 개인정보의 보유 및 이용기간<br />
                  원칙적으로, 개인정보 수집 및 이용목적이 달성된 후(회원 탈퇴 등)에는 귀하의 개인정보를 지체 없이 파기합니다. 단,관계법령의 규정에 의하여 보존할
                  필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.<br />
                  - 서비스이용기록, 접속로그, 접속IP정보 : 3개월 (통신비밀보호법)<br />
                  - 표시/광고에 관한 기록 : 6개월 (전자상거래법등에서의 소비자보호에 관한 법률)<br />
                  - 계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래법등에서의 소비자보호에 관한 법률)<br />
                  - 대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법등에서의 소비자보호에 관한 법률)<br />
                  - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래법등에서의 소비자보호에 관한 법률)<br />
                </div><div id="mCSB_1_scrollbar_vertical" class="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" style={{ display: 'block' }}><div class="mCSB_draggerContainer"><div id="mCSB_1_dragger_vertical" class="mCSB_dragger" style={{ position: 'absolute', minHeight: '30px', display: 'block', height: '72px', maxHeight: '140px', top: '0px' }}>
                  <div class="mCSB_dragger_bar" style={{ lineHeight: '30px' }}></div></div><div class="mCSB_draggerRail"></div></div></div></div></div>
                <label class="form_checkbox">
                  <input name="agree1" type="checkbox" />
                  <span class="icon"></span>개인정보수집 및 이용에 동의합니다. <em>(필수)</em>
                </label>
              </div>
              <div class="pd_agree">
                <h3>개인정보 위탁동의</h3>
                <div class="scroll_wrapper mCustomScrollbar _mCS_2"><div id="mCSB_2" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" tabindex="0" style={{ maxHeight: 'none' }}><div id="mCSB_2_container" class="mCSB_container" style={{ position: 'relative', top: '-37px', left: '0px' }} dir="ltr">
                  회사는 서비스의 향상을 위하여 아래와 같이 외부 전문업체를 통하여 업무를 위탁하여
                  운영하고 있습니다. 위탁 업무를 위해 제공되는 정보는 해당 업무를 위해 필요한 최소
                  한의 정보만 제공됩니다.<br /><br />

                  - 데이터 전산 처리 및 유지관리 : Wylie.Co.Ltd, IMT Soft Corporation<br />
                  - 결제 처리업체 : Fiserv<br />
                  - 고객 경험 관리 서비스 제공, 써브카드 프로그램 및 마케팅 관리 : 써브카드 코리아<br />
                  ,IPCA, Simplicity Australasia Ltd<br />
                  - 고객센터 운영 : 씨엔티테크 ㈜<br /><br />

                  회사는 고객님의 개인정보를 중요시하며, “정보통신망 이용촉진 및 정보보호＂에 관한
                  법률을 준수하고 있습니다.<br />
                </div><div id="mCSB_2_scrollbar_vertical" class="mCSB_scrollTools mCSB_2_scrollbar mCS-light mCSB_scrollTools_vertical" style={{ display: 'block' }}>
                    <div class="mCSB_draggerContainer">
                      <div id="mCSB_2_dragger_vertical" class="mCSB_dragger" style={{ position: 'absolute', minHeight: '30px', display: 'block', height: '120px', maxHeight: '140px', top: '30px' }}>
                        <div class="mCSB_dragger_bar" style={{ lineHeight: '30px' }}></div></div><div class="mCSB_draggerRail"></div></div></div></div></div>
                <label class="form_checkbox">
                  <input name="agree2" type="checkbox" />
                  <span class="icon"></span>개인정보 위탁에 동의합니다. <em>(필수)</em>
                </label>
              </div>
            </div>

            <h3 class="h_title">문의 작성하기</h3>

            <div class="board_write_wrapper">
              <p class="rt_note">필수입력사항<span class="ess"></span></p>
              <table>
                <tbody>
                  <tr>
                    <th scope="col">이름<span class="ess"></span></th>
                    <td>
                      <span class="form_text" style={{ width: '100%' }}>
                        <input maxlength="10" name="writer" placeholder="이름을 입력해주세요" type="text" readonly="readonly" value="김기범" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">연락처<span class="ess"></span></th>
                    <td>
                      <span class="form_text" style={{ width: '100%' }}>
                        <input maxlength="15" name="contact" onkeyup="subwayCommon.inputOnlyDigit(this);" placeholder="연락 가능한 전화번호를 입력해주세요" type="text" readonly="readonly" value="01039400967" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">이메일<span class="ess"></span></th>
                    <td>
                      <span class="form_text" style={{ width: '200px' }}>
                        <input id="franchiseEmail1" maxlength="50" name="email1" onkeyup="subwayCommon.inputEmail(this);" placeholder="이메일" type="text" readonly="readonly" value="" />
                      </span>
                      <span class="em">@</span>
                      <span class="form_text" style={{ width: '200px' }}>
                        <input id="franchiseEmail2" maxlength="50" name="email2" type="text" readonly="readonly" value="" />
                      </span>
                      <div class="form_select" style={{ width: '196px', marginLeft: '7px' }}>
                        <select id="emailDomain" name="dmain" onchange="view.domain();" readonly="readonly">
                          <option value="" disabled="">직접입력</option>
                          <option value="naver.com" disabled="">naver.com</option>
                          <option value="hanmail.net" disabled="">hanmail.net</option>
                          <option value="hotmail.com" disabled="">hotmail.com</option>
                          <option value="nate.com" disabled="">nate.com</option>
                          <option value="empas.com" disabled="">empas.com</option>
                          <option value="dreamwiz.com" disabled="">dreamwiz.com</option>
                          <option value="lycos.co.kr" disabled="">lycos.co.kr</option>
                          <option value="korea.com" disabled="">korea.com</option>
                          <option value="gmail.com">gmail.com</option>
                          <option value="hanmir.com" disabled="">hanmir.com</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">지역<span class="ess"></span></th>
                    <td>
                      <div class="form_select" style={{ width: '196px' }}>
                        <select name="region1">
                          <option value="">시/도</option>
                          <option value="001">서울특별시</option>
                          <option value="002">경기도</option>
                          <option value="003">인천광역시</option>
                          <option value="004">대전광역시</option>
                          <option value="005">세종특별자치시</option>
                          <option value="006">충청남도</option>
                          <option value="007">경상남도</option>
                          <option value="008">울산광역시</option>
                          <option value="009">부산광역시</option>
                          <option value="010">대구광역시</option>
                          <option value="011">제주특별자치도</option>
                          <option value="012">전라북도</option>
                          <option value="013">충청북도</option>
                          <option value="014">광주광역시</option>
                          <option value="015">전라남도</option>
                          <option value="016">경상북도</option>
                          <option value="017">강원도</option>
                        </select>
                      </div>
                      <div class="form_select" id="select2" style={{ width: '196px' }}>
                        <select name="region2">
                          <option value="">시/군/구</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">제목<span class="ess"></span></th>
                    <td>
                      <span class="form_text" style={{ width: '100%' }}>
                        <input maxlength="50" name="subject" placeholder="제목을 입력해주세요" type="text" value="" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">내용<span class="ess"></span></th>
                    <td>
                      <span class="form_textarea" style={{ width: '100%' }}>
                        <textarea cols="5" maxlength="500" name="content" placeholder="가맹점 신청과 관련된 문의사항을 작성해 주세요. 
                                                                                          문의하실 내용을 구체적으로 작성해 주시면 더욱 빠르고 정확한 답변을 드릴 수 있습니다." rows="10" style={{ height: '230px' }}></textarea>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">첨부파일</th>
                    <td>
                      <label class="form_file" style={{ width: '466px' }}>
                        <input data-maxsize="5" data-maxupload="1" id="file" name="file" onchange="formFile(this); return false;" type="file" />
                        <input readonly="readonly" type="text" />
                      </label>

                      <span class="file_note">※ 등록 가능 확장자 : pdf,docx,pptx,xlsx,jpg,jpeg,gif,png / 최대 5MB</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="agree_info">
                <p>신청·문의사항에 대한 답변은 메일로 발송됩니다.  동의하시겠습니까?</p>
                <label class="form_checkbox">
                  <input name="agree3" type="checkbox" />
                  <span class="icon"></span>예, 동의합니다.
                </label>
              </div>

              <div class="inquiry_notice">
                <ul>
                  <li>· 문의가 집중되거나 주말의 경우 답변이 지연될 수 있습니다. 최대한 빠르게 답변 드리도록 하겠습니다.</li>
                  <li>· 욕설, 비속어, 비방성 등의 부적절한 단어 포함되어 있는 경우, 답변 진행이 어려울 수 있습니다.</li>
                </ul>
              </div>
            </div>

            <div class="btns_wrapper">
              <a class="btn bgc_white" href="#" onclick="view.cancel();return false;" style={{ width: '126px' }}><span>취소</span></a>
              <a class="btn bgc_point i_reg" href="#" onclick="view.save();return false;" style={{ width: '170px' }}><span>등록하기</span></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MemberShip;