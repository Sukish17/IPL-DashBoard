import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="list">
      <Link to={`/team-matches/${id}`} className="bg1">
        <img src={teamImageUrl} className="img1" alt="team image" />
        <p>{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
