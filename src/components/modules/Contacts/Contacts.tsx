import React from 'react';

const Contacts = () => {
	return (
		<section className="table-contact">
			<ul className="table-contact-wrap">
				<li className="table-contact__inf">Полное Наименование</li>
				<li className="table-contact__get">
					Общество с ограниченной ответственностью «Рыбоконсервный завод 37»
				</li>
			</ul>
			<ul className="table-contact-wrap">
				<li className="table-contact__inf">Сокращенное наименование</li>
				<li className="table-contact__get">ООО «РКЗ 37»</li>
			</ul>
			<ul className="table-contact-wrap">
				<li className="table-contact__inf">Юридический адрес</li>
				<li className="table-contact__get">
					Россия, Камчатский край, Елизовский район, г. Елизово, ул. Винокурова
					д.12
				</li>
			</ul>
			<ul className="table-contact-wrap">
				<li className="table-contact__inf">Почтовый адрес</li>
				<li className="table-contact__get">
					Россия, Камчатский край, Елизовский район, г. Елизово, ул. Винокурова
					д.12
				</li>
			</ul>
			<ul className="table-contact-wrap">
				<li className="table-contact__inf">ИНН/КПП</li>
				<li className="table-contact__get">2540177052/ 410101001</li>
			</ul>
			<ul className="table-contact-wrap">
				<li className="table-contact__inf">ОГРН</li>
				<li className="table-contact__get">1112540010010</li>
			</ul>
			<ul className="table-contact-wrap">
				<li className="table-contact__inf">Директор</li>
				<li className="table-contact__get">Коренев Алексей Викторович</li>
			</ul>
			<ul className="table-contact-wrap">
				<li className="table-contact__inf">E-mail:</li>
				<li className="table-contact__get">rkz37discovery@mail.ru</li>
			</ul>
			<ul className="table-contact-wrap">
				<li className="table-contact__inf">Телефон</li>
				<li className="table-contact__get">+7-914-624-68-04</li>
			</ul>
		</section>
	);
};

export default Contacts;
