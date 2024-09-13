'use client';
import React from 'react';
import cl from './Plot.module.css';

const Plot = () => {
	return (
		<section className={`${cl.plot} column`}>
			<div className={cl.box_plot}>
				<div className={cl.minbox_plot}>
					<strong>{`Наименование водного объекта`}</strong>
					<div className={cl.name_plot}>река Пенжина</div>
				</div>
				<div className={cl.line_plot}></div>
				<div className={cl.minbox_plot}>
					<strong>Номер рыболовного участка</strong>
					<div>1163</div>
					<div className={cl.line_plot}></div>
				</div>

				<div className={cl.minbox_plot}>
					<strong>
						Границы участка (координаты базовых точек определяются в системе
						координат WGS-84)
					</strong>
					<div className={cl.gran_plot}>
						<div>{`точка 1 - 62°25'58" с.ш. 166°04'04" в.д.;`}</div>
						<div>{`точка 2 - 62°25'43" с.ш. 166°04'01" в.д.;`}</div>
						<div>{`точка 3 - 62°25'35" с.ш. 166°11'01" в.д.;`}</div>
						<div>{`точка 4 - 62°25'52" с.ш. 166°11'10" в.д.;`}</div>
						<div>
							{' '}
							Акватория водоема ограниченная последовательно соединенной линией:
							от точки 1 до точки 2 по береговой линии, далее от точки 2 до
							точки 3 по прямой линии на расстоянии 200 м, далее от точки 3 до
							точки 4 по линии, проходящей параллельно береговой линии на
							расстоянии 200 м, далее от точки 4 до точки 1 по прямой линии на
							расстоянии 200 м
						</div>
					</div>
				</div>
				<div className={cl.line_plot}></div>

				<div className={cl.minbox_plot}>
					<strong>Размеры участка</strong>
					Площадь - 120,0 га Длина - 6 000 м Ширина - 200 м
				</div>
				<div className={cl.line_plot}></div>

				<div className={cl.minbox_plot}>
					<strong>Виды водных биоресурсов</strong>
					анадромные, катадромные и трансграничные виды
				</div>
			</div>

			<div className={cl.box_plot}>
				<div className={cl.minbox_plot}>
					<strong>{`Наименование водного объекта&nbsp;`}</strong>
					<div className={cl.name_plot}>Карагинский залив, бухта Карага</div>
				</div>
				<div className={cl.line_plot}></div>
				<div className={cl.minbox_plot}>
					<strong>Номер рыболовного участка</strong>
					<div>1157</div>
					<div className={cl.line_plot}></div>
				</div>

				<div className={cl.minbox_plot}>
					<strong>
						Границы участка (координаты базовых точек определяются в системе
						координат WGS-84)
					</strong>
					<div className={cl.gran_plot}>
						<div>{`точка 1 - 59°04'05" с.ш. 163°14'26" в.д.;`}</div>
						<div>{`точка 2 - 59°04'27" с.ш. 163°14'39" в.д.;`}</div>
						<div>{`точка 3 - 59°04'30" с.ш. 163°14'15" в.д.; `}</div>
						<div>{`точка 4 - 59°04'08" с.ш. 163°14'03" в.д.;`}</div>
						<div>
							{' '}
							Акватория водоема, ограниченная последовательно соединенной
							линией: от точки 1 до точки 2 по береговой линии, Далее от точки 2
							до точки 3 по прямой линии, Далее от точки 3 до точки 4 по прямой
							линии, Далее от точки 4 до точки 1 по прямой линии
						</div>
					</div>
				</div>
				<div className={cl.line_plot}></div>

				<div className={cl.minbox_plot}>
					<strong>Размеры участка</strong>
					Площадь - 28,0 га
				</div>
				<div className={cl.line_plot}></div>

				<div className={cl.minbox_plot}>
					<strong>Виды водных биоресурсов</strong>
					чавыча, кижуч, горбуша, нерка,кета
				</div>
			</div>
			<div className={cl.box_plot}>
				<div className={cl.minbox_plot}>
					<strong>{`Наименование водного объекта`}</strong>
					<div className={cl.name_plot}>
						Карагинский залив, Акватория бухта Карага
					</div>
				</div>
				<div className={cl.line_plot}></div>
				<div className={cl.minbox_plot}>
					<strong>Номер рыболовного участка</strong>
					<div>1158</div>
					<div className={cl.line_plot}></div>
				</div>

				<div className={cl.minbox_plot}>
					<strong>
						Границы участка (координаты базовых точек определяются в системе
						координат WGS-84)
					</strong>
					<div className={cl.gran_plot}>
						<div>{`точка 1 - 59°06'06" с.ш. 163°10'27" в.д.;`}</div>
						<div>{`точка 2 - 59°06′20′′ с.ш. 163°09'06" в.д.;`}</div>
						<div>{`точка 3 - 59°06′04′′ с.ш. 163°08'58" в.д.; `}</div>
						<div>{`точка 4 - 59°05'51" с.ш. 163°10'14" в.д.;`}</div>
						<div>
							{' '}
							Акватория водоема, ограниченная последовательно соединенной
							линией: от точки 1 до точки 2 по береговой линии, Далее от точки 2
							до точки 3 по прямой линии, Далее от точки 3 до точки 4 по прямой
							линии, Далее от точки 4 до точки 1 по прямой линии
						</div>
					</div>
				</div>
				<div className={cl.line_plot}></div>

				<div className={cl.minbox_plot}>
					<strong>Размеры участка</strong>
					Площадь - 65,0 га
				</div>
				<div className={cl.line_plot}></div>

				<div className={cl.minbox_plot}>
					<strong>Виды водных биоресурсов</strong>
					чавыча, кижуч,горбуша, нерка, кета
				</div>
			</div>
			<div className={cl.box_plot}>
				<div className={cl.minbox_plot}>
					<strong>{`Наименование водного объекта`}</strong>
					<div className={cl.name_plot}>Охотское море</div>
				</div>
				<div className={cl.line_plot}></div>
				<div className={cl.minbox_plot}>
					<strong>Номер рыболовного участка</strong>
					<div>1176</div>
					<div className={cl.line_plot}></div>
				</div>

				<div className={cl.minbox_plot}>
					<strong>
						Границы участка (координаты базовых точек определяются в системе
						координат WGS-84)
					</strong>
					<div className={cl.gran_plot}>
						<div>{`точка 1 - 57°05'56" с.ш. 156°43'26" в.д.;`}</div>
						<div>{`точка 2 - 57°06′05′′ с.ш. 156°43′33" в.д.;`}</div>
						<div>{`точка 3 - 57°06'09" с.ш. 156°43'16" в.д.; `}</div>
						<div>{`точка 4-57°06′00′′ с.ш. 156°43'10" в.д.`}</div>
						<div>
							{' '}
							Акватория водоема, ограниченная последовательно соединенной
							линией: от точки 1 до точки 2 по береговой линии, Далее от точки 2
							до точки 3 по прямой линии, Далее от точки 3 до точки 4 по прямой
							линии, Далее от точки 4 до точки 1 по прямой линии
						</div>
					</div>
				</div>
				<div className={cl.line_plot}></div>

				<div className={cl.minbox_plot}>
					<strong>Размеры участка</strong>
					Площадь - 9,0 га
				</div>
				<div className={cl.line_plot}></div>

				<div className={cl.minbox_plot}>
					<strong>Виды водных биоресурсов</strong>
					анадромные, катадромные трансграничные
				</div>
			</div>
			<div className={cl.box_plot}>
				<div className={cl.minbox_plot}>
					<strong>{`Наименование водного объекта`}</strong>
					<div className={cl.name_plot}>река Камчатка</div>
				</div>
				<div className={cl.line_plot}></div>
				<div className={cl.minbox_plot}>
					<strong>Номер рыболовного участка</strong>
					<div>1171</div>
					<div className={cl.line_plot}></div>
				</div>

				<div className={cl.minbox_plot}>
					<strong>
						Границы участка (координаты базовых точек определяются в системе
						координат WGS-84)
					</strong>
					<div className={cl.gran_plot}>
						<div>
							1)нижняя граница рыболовного участка на удалении 340 000 м от
							устья р. Камчатка; 2) верхняя граница рыболовного участка на
							удалении 342 000 м от устья р. Камчатка; 3) оба берега
						</div>
						<div>
							2) верхняя граница рыболовного участка на удалении 342 000 м от
							устья р. Камчатка; 3) оба берег
						</div>
						<div>3) оба берег</div>
					</div>
				</div>
				<div className={cl.line_plot}></div>

				<div className={cl.minbox_plot}>
					<strong>Размеры участка</strong>
					Площадь - 27,6 га Длина - 2000 м
				</div>
				<div className={cl.line_plot}></div>

				<div className={cl.minbox_plot}>
					<strong>Виды водных биоресурсов</strong>
					кижуч, горбуша, нерка, кета
				</div>
			</div>
		</section>
	);
};

export default Plot;
