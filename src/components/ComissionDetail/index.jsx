import AddToBasket from "../AddToBasket"
import AddToCollection from "../AddToCollection"
import styles from "./comissiondetail.module.css"
function ComissionDetail({ comission }) {
    return (
        <div className={styles.box}>
            <div className={styles.upBox}>
                <div className={styles.imageBox}>
                    <img
                        className={styles.image1}
                        src={comission.image1}
                        alt={comission.name} />
                    <div className={styles.imageSubBox}>
                        <img
                            className={styles.image2}
                            src={comission.image2}
                            alt={comission.name} />
                        <img
                            className={styles.image3}
                            src={comission.image3}
                            alt={comission.name} />
                    </div>
                    <AddToCollection comission={comission} />
                </div>

                <div className={styles.detail}>
                    <div className={styles.info}>
                        <h2 className={styles.category}>
                            {comission.category}
                        </h2>
                        <h2 className={styles.price}>
                            {comission.price}
                        </h2>
                        <h6 className={styles.name}>
                            {comission.name}
                        </h6>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.desTitle}>•預計交期：</p>
                        <p className={styles.des}>{comission.des1}</p>
                        <p className={styles.desTitle}>•授權範圍：</p>
                        <p className={styles.des}>{comission.des2}</p>
                        <p className={styles.desTitle}>•修改次數：</p>
                        <p className={styles.des}>{comission.des3}</p>
                        <p className={styles.desTitle}>•付款分段：</p>
                        <p className={styles.des}>{comission.des4}</p>
                    </div>
                    <div className={styles.btn}>
                        <AddToBasket comission={comission} />
                    </div>
                </div>
            </div>
            <div className={styles.underBox}>
                <div className={styles.noticeTitle}>委託須知</div>
                <div className={styles.noticeSubTitle}>(發起委託即代表同意並接受以下內容)</div>
                <div className={styles.noticeItem}>1. 採不朔既往原則</div>
                <div className={styles.noticeText}>每單委託所適用的規則為交易成立當下(確認已繳畢訂金)的規則，若在交件前規則有產生更改，該單委託則繼續使用更改前的規則而非更改後的規則。</div>
                <div className={styles.noticeItem}>2. 此為客製化商品無七天鑑賞期，不可退貨。</div>

                <div className={styles.noticeItem}>3. 若要將其發布在公開平台上，請務必要附上我的暱稱或任何一支繪帳的ID。</div>

                <div className={styles.noticeItem}>4. 禁止二次加工。</div>

                <div className={styles.noticeItem}>5. 委託的成品也會作為未來的委託範例圖(會加水印)</div>
                <div className={styles.noticeText}>如不希望被作此用途或買斷須加錢。</div>
                <div className={styles.noticeItem}>​6. 若將商品用於違法用途，後果請全部由委託人自行負責。</div>

                <div className={styles.noticeItem}>7. 跑單會公開黑單&要求加錢。</div>
                <div className={styles.noticeText}>數次要求未果且該單總額大於1000元新台幣時會走法律途徑。
                    跑單：委託人在繪者交件後因自己沒能力付款或其他原因沒有付款就消失。</div>
                <div className={styles.noticeItem}>8. 非商業委託在未告知的前提下用於商業用途會公開黑單&要求加錢</div>
                <div className={styles.noticeText}>情節嚴重者會走法律途徑。
                    商業行為：物品或服務的交換或所有權的轉移(與他人交換)、賺取利潤為目的或包含賺取利潤的行為。</div>
                <div className={styles.noticeItem}>9. 金額款項逾10日未繳清會先告知，告知後3日視同棄單且會公開黑單處理</div>
                <div className={styles.noticeText}>如有特殊原因無法在期限內繳清者請務必告知。</div>
                <div className={styles.noticeItem}>10.不接經查發現有不良紀錄(如被列入過黑名單)經歷者之委託</div>
                <div className={styles.noticeText}>除非對方可提供誠信與復發補償依據。</div>
                <div className={styles.noticeItem}>11.交件後除非畫錯不然不接受修改</div>
                <div className={styles.noticeText}>此修改為免費項目。
                    最後一次交付的委託內容未提及但有作畫需求之項目會由我自行發揮。
                    畫錯：指與最後一次交付的委託內容有所出入。</div>
                <div className={styles.noticeItem}>12.可能會根據角色數多寡、背景有無與複雜度、角色外觀複雜度來向上調整價錢</div>

                <div className={styles.noticeItem}>13.非出自不得已因素不得中途棄單</div>
                <div className={styles.noticeText}>棄單則委託人將失去該單之所有委託圖的所有事前事後權利及權力。</div>
                <div className={styles.noticeItem}>14.若繪者於委託中途遭遇不可抗力因素致使委託工期延長，會以委託人可行的聯繫管道告知</div>
                <div className={styles.noticeText}>無法接受延期者可提出棄單，
                    基於此情況下提出的棄單不會黑單處置也不會加收費用，
                    但若另提要求取得棄單前的最終進度檔會酌收些許費用。</div>
                    <div className={styles.noticeItem}>15. 若個別委託類型內所提及之規範內容與委託須知相衝，則以該委託類型內所提及之規範內容為準</div>
                <div className={styles.noticeText}>若仍有疑義可私訊再議。</div>
                <div className={styles.noticeItem}>16.訂金為總價的一半</div>
                <div className={styles.noticeText}>若有特殊原因無法以此比例支付可私訊另議。</div>
            </div>
        </div>

    );

}
export default ComissionDetail;