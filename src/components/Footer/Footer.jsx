import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={styles.footer_container}>
			<div className={styles.first_col}>
				<h1 className={styles.company_name}>Qtify</h1>
				<div className={styles.company_description}>
				Qtify is a sophisticated digital music service offering users access to an extensive library comprising millions of songs and diverse content from creators across the globe. This platform is meticulously designed to provide a seamless and enriched music streaming experience, catering to the preferences of a global audience. With an expansive catalog of music, Qtify empowers users to explore and enjoy a vast array of musical genres, ensuring a comprehensive and personalized entertainment experience.
				</div>
			</div>
			<div className={styles.second_col}>
				<h2 className={styles.link_header}>Contact</h2>
				<ul className={styles.link_items}>
					<li>Bengaluru, India</li>
					<li>subhamnaskar671@gmail.com</li>
					<li>+91 9348169028</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
