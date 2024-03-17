import images from '../Images/index'

export default ({
	setOpenProfile,
	setCompleteModal,
	setGetModel,
	setStartModal,
}) => {
	const team = [
		{
			headerText: 'Complete Shipment',
			descriptionText: 'Complete the shipment transactions.',
		},
		{
			headerText: 'Get Shipment',
			descriptionText: 'Get shipment details.',
		},
		{
			headerText: 'Start Shipment',
			descriptionText: 'Start the shipment transaction.',
		},
		{
			headerText: 'User Profile',
			descriptionText: 'Open user profile.',
		},
		{
			headerText: 'Shipment Count',
			descriptionText: 'Get the shipment count',
		},
		{
			headerText: 'Send Shipment',
			descriptionText: 'Send the shipment.',
		},
	]

	const openModelBox = (text) => {
		if (text === 1) {
			setCompleteModal(true)
		} else if (text === 2) {
			setGetModel(true)
		} else if (text === 3) {
			setStartModal(true)
		} else if (text === 4) {
			setOpenProfile(true)
		}
	}
	return (
		<section className="py-0 pb-14">
			<div className="max-w-screen-xl mx-auto px-4 md:px-8">
				<div className="mt-12">
					<ul className="grid gap-8 grid-cols-3">
						{team.map((item, i) => (
							<li key={i}>
								<div className="w-full h-60 sm:h-52 md:h-56">
									<Card
										headerText={item.headerText}
										descriptionText={item.descriptionText}
										onClickEvent={() => openModelBox(i + 1)}
									/>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

const Card = ({ headerText, descriptionText, onClickEvent }) => {
	return (
		<div className="card w-96 bg-base-100 shadow-xl border-2 border-cyan-500">
			<div className="card-body">
				<h2 className="card-title">{headerText}</h2>
				<p>{descriptionText}</p>
				<div className="card-actions justify-end mt-2">
					<button className="btn" onClick={onClickEvent}>
						{headerText}
					</button>
				</div>
			</div>
		</div>
	)
}
