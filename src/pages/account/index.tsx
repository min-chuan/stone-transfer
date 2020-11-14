import React, {FC} from 'react';
import PageContainer from '@/components/PageContainer';
import Card from '@/components/Card';
import styles from './index.module.scss'
import Button from '@/components/Button';
import classnames from 'classnames';
import { lock } from '@/config/img-url';
interface AccountProps {

}

const Account: FC<AccountProps> = (props) => {
    const {} = props;
    return (
        <PageContainer className={styles.account}>
            <div className={styles.container}>
                <Card className={styles.message} title="账号信息">
                    <ul>
                        <li><span className={styles.text}>绑定邮箱</span></li>
                        <li><span className={styles.text}>绑定微信账号</span></li>
                        <li>
                            <span className={styles.text}>手机号</span>
                            <p className={styles.subtext}>15868163725</p>
                        </li>
                        <li><span className={styles.text}>登出</span></li>
                    </ul>
                </Card>
                <Card className={styles.promessage} title="Pro账号信息">
                    <div className={classnames(styles.block, styles.basis)}>
                        <h4 className={styles.title}>账号信息：</h4>
                        <div className={styles.content}>
                            <ul>
                                <li>账号：免费</li>
                                <li>剩余：无</li>
                                <li>到期日期：无</li>
                            </ul>
                            <Button className={styles.levelup}>立即升级</Button>
                        </div>
                    </div>
                    <div className={classnames(styles.block, styles.domain)}>
                        <h4 className={styles.title}><img src={lock}/>设置个性域名</h4>
                        <p>kickass-brand.cowtransfer.com</p>
                    </div>
                    <div className={classnames(styles.block, styles.bg)}>
                        <h4 className={styles.title}><img src={lock}/>定制专属传输背景</h4>
                        <p>
                            支持自定义3个背景，每45秒切换，建议20MB以内的图片/视频，
                            <br/>
                            图片建议分辨率2560X1600，背景可自定义跳转链接
                        </p>
                        <ul className={styles.pics}>
                            <li>
                                <img src={lock}/>
                            </li>
                            <li>
                                <img src={lock}/>
                            </li>
                            <li>
                                <img src={lock}/>
                            </li>
                        </ul>
                    </div>
                    <div className={classnames(styles.block, styles.domain)}>
                        <h4 className={styles.title}><img src={lock}/>Pro成员设置</h4>
                        <p>需成为企业账号</p>
                        <p>企业成员 3TB 云盘空间(每个账号)</p>
                    </div>
                </Card>
            </div>
            
        </PageContainer>
    )
}

export default Account;