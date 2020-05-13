import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorBoundary from '../error-boundary'
import SwapiService from '../../services/swapi-service'
import DummySwapiService from '../../services/dummy-swapi-service'
import { SwapiServiceProvider } from '../swapi-service-context'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'

import './app.css'

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService(),
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService
      console.log('Service: ', Service.name)

      return {
        swapiService: new Service(),
      }
    })
  }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />
            {planet}
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    )
  }
}