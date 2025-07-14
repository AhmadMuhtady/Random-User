function fetchUser() {
	showSpinner();
	fetch('https://randomuser.me/api')
		.then((res) => res.json())
		.then((data) => {
			hideSpinner();
			displayUser(data.results[0]);
		});
}

function displayUser(user) {
	const userDisplay = document.querySelector('#user');
	if (user.gender === 'female') {
		document.body.style.backgroundColor = 'rebeccapurple';
	} else {
		document.body.style.backgroundColor = 'steelblue';
	}

	userDisplay.innerHTML = `				<div class="user-content">
					<div class="user-main">
						<img
							class="user-image"
							src="${user.picture.large}"
							alt="User profile"
						/>
						<div class="user-info">
							<p><span>Name: </span>${user.name.first} ${user.name.last}</p>
							<p><span>Email: </span>${user.email}</p>
							<p><span>Phone: </span>${user.phone}</p>
							<p><span>Location: </span>${user.location.city} ${user.location.country}</p>
							<p><span>Age: </span>${user.dob.age}</p>
						</div>
					</div>
				</div>`;
}

function showSpinner() {
	document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
	document.querySelector('.spinner').style.display = 'none';
}

document.getElementById('generate').addEventListener('click', fetchUser);
fetchUser();
