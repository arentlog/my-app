var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';
import { ActivatedRoute } from '@angular/router';
var PokemonDetailComponent = /** @class */ (function () {
    function PokemonDetailComponent(pokemonService, route) {
        var _this = this;
        this.pokemonService = pokemonService;
        this.route = route;
        this.route.params.subscribe(function (params) {
            if (params['pokemon']) {
                _this.pokemonService.getPokemonDetails(params['pokemon']).subscribe(function (data) {
                    _this.pokemonDetails = data;
                    console.log(_this.pokemonDetails);
                });
            }
        });
    }
    PokemonDetailComponent.prototype.ngOnInit = function () {
    };
    PokemonDetailComponent.prototype.openNewTab = function (url) {
        window.open(url, '_blank');
    };
    PokemonDetailComponent = __decorate([
        Component({
            selector: 'app-pokemon-detail',
            templateUrl: './pokemon-detail.component.html',
            styleUrls: ['./pokemon-detail.component.css']
        }),
        __metadata("design:paramtypes", [PokemonService, ActivatedRoute])
    ], PokemonDetailComponent);
    return PokemonDetailComponent;
}());
export { PokemonDetailComponent };
//# sourceMappingURL=pokemon-detail.component.js.map