import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { persons } from '../models/person.mock';
import { PersonsService } from './persons.service';

describe('PersonsService', () => {
    let service: PersonsService;
    let httpMock: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [PersonsService],
      });
      service = TestBed.inject(PersonsService);
      httpMock = TestBed.inject(HttpTestingController);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  
    it('should retrieve OPI reporting periods', () => {
      service.getPersonsList().subscribe(res => {
        expect(res).toBeTruthy();
        expect(res.length).toEqual(2);
      });
      const req = httpMock.expectOne(
        `https://jsonplaceholder.typicode.com/users`
      );
      expect(req.request.method).toEqual('GET');
      req.flush(persons);
    });
});
  